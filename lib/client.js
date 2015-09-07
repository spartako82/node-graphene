var _ = require('underscore'),
WebSocket = require('ws');

// Generic client using websocket
var createClient = function(url,cb){
  var ws = new WebSocket(url);
  var hCb = {};
  var client = {};

  var idCmd = 0;

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
  });

  // client raw command (private)
  client._send = function(cmd,_cb){
    var cmdParsed = JSON.parse(cmd);
    ws.send(cmd);
    hCb[cmdParsed.id] = _cb;
  };

  // client send command
  client.send = function(apiLevel,funcName,params,_cb){
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
