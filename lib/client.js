var _ = require('underscore'),
WebSocket = require('ws');

// Generic client using websocket (url,cb)
var createClient = function(url,cb){
  if(_.isObject(url)){
    var input = url;
    url = input.url;
    var cbMessage = input.cbMessage || null;
  }

  var ws = new WebSocket(url);
  var hCb = {};
  var client = {};
  var hSubscribeCb = {};

  var idCmd = 0;

  var convertParam = function(p){
    if(_.isFunction(p)){
      hSubscribeCb[idCmd] = p;
      return idCmd;
    }
    else{
      return p;
    }
  };

  ws.on("open",function(){
    cb(false,client);
    client.isOpen = true;
  });

  ws.once("error",function(err){
    if(!client.isOpen){
      cb(err);
    }
  });

  ws.on("message",function(message){
    try{
      var parsedMessage = JSON.parse(message);
      if(parsedMessage.id in hCb){
        var mCb = hCb[parsedMessage.id];
        delete hCb[parsedMessage.id];
        //console.log(parsedMessage);
        if(parsedMessage.error){
	  mCb(parsedMessage.error.message);
        }
        else{
	  mCb(false,parsedMessage.result);
        }
      }
      else if(parsedMessage.method === "notice"){
        var cbId = parsedMessage.params[0];
        if(cbId in hSubscribeCb){
          hSubscribeCb[cbId].apply(this,parsedMessage.params[1]);
        }
      }

      if(cbMessage){
        cbMessage(parsedMessage);
      }
    }
    catch(e){
      console.log(e);
    }
  });

  // client raw command (private)
  client._send = function(cmd,_cb){
    var cmdParsed = JSON.parse(cmd);
    ws.send(cmd);
    hCb[cmdParsed.id] = _cb;
  };

  // client send command
  client.send = function(apiLevel,funcName,params,_cb){
    // convert params for cb input
    params = _.map(params,convertParam);
    var cmd = {"id" : idCmd, "method" : "call", "params" : [apiLevel,funcName,params]};
    cmd = JSON.stringify(cmd);
    //console.log(cmd);
    idCmd++;
    client._send(cmd,_cb);
  };

  client.close = function(_cb){
    ws.close();
  };
};
exports.createClient = createClient;
