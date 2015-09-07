var _ = require('underscore'),
async = require('async'),
argv = require('yargs').argv
lib  = require('lib/');

var die = function() {
  console.log("bin/flood");
  console.log("");
  console.log("USAGE: bin/flood.js account url-wallet [nTxBlock]");
  process.exit(1);
}

if(argv._.length < 1){
  die();
  return;
}

var main = function(){
  var myAccount = argv._[0];
  //var url = "ws://127.0.0.1:8091";
  var url = argv._[1];
  var nTx = argv._[2] || 15;
  nTx = parseInt(nTx);

  var nBlock = 0;
  lib.wallet.createWalletClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    async.whilst(
      function(){ return true},
      function(cb){
        console.log("******* "+nBlock+"******* ");
        nBlock++;
        // Create random spam list
        var prefix = Math.random().toString(36).slice(2)
        var accounts = _.range(0,nTx);
        accounts = _.map(accounts,function(n){
          return "spam-"+n.toString()+"-"+prefix+"."+myAccount;
        });
        //console.log(accounts);
        var iAccount = 0;
        async.each(accounts,function(account,_cb){
          setTimeout(function(){
            //console.log(account);
            client.create_account_with_brain_key("this is "+myAccount,account,myAccount,myAccount,true,function(err,r){
	      if(err){
	          console.log("ERROR",err);
	      }
	      else{
	          console.log("CREATED",account);
              }
              //console.log(err,r);
              _cb();
            })
          },iAccount*5000/nTx);
          iAccount++;
        },function(){
          cb();
        });
      },
      function(){

      });
  });

};
main();
