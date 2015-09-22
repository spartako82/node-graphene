var libClient = require('./client');

// Create client for using wallet api
var createWalletClient = function(url,cb){
  libClient.createClient(url,function(err,client){
    if(err){
      cb(err);
      return;
    }
    // Set client witness apis
    ///////////////////////////////////

    client.create_account_with_brain_key  = function(brainKey,accountName,registarAccount,referrerAccount,broadcast,_cb){
      client.send(0,"create_account_with_brain_key",[brainKey,accountName,registarAccount,referrerAccount,broadcast],_cb);
    };

    client.transfer = function(from,to,amount,symbol,memo,broadcast,_cb){
      client.send(0,"transfer",[from,to,amount,symbol,memo,broadcast],_cb);
    };

    // Return without errors
    cb(false,client);
  });
};
exports.createWalletClient = createWalletClient;
