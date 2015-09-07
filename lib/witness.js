var libClient = require('./client');

// Create client for using witness api
var createWitnessClient = function(url,cb){
  libClient.createClient(url,function(err,client){
    if(err){
      cb(err);
      return;
    }
    // Set client witness apis
    ///////////////////////////////////

    client.get_accounts = function(accounts,_cb){
      client.send(0,"get_accounts",[accounts],_cb);
    };

    client.get_dynamic_global_properties = function(_cb){
      client.send(0,"get_dynamic_global_properties",[],_cb);
    };

    client.get_block = function(blockId,_cb){
      client.send(0,"get_block",[blockId.toString()],_cb);
    };

    client.get_witnesses = function(witnesses,_cb){
      client.send(0,"get_witnesses",[witnesses],_cb);
    };

    // TODO: add other methods

    // Return without errors
    cb(false,client);
  });
};
exports.createWitnessClient = createWitnessClient;
