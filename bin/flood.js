var _ = require('underscore'),
async = require('async'),
argv = require('yargs').argv
lib  = require('../lib/');

var die = function() {
  console.log("bin/flood");
  console.log("");
  console.log("USAGE: bin/flood.js account1 account2 url-wallet [nTxBlock]");
  process.exit(1);
}

if(argv._.length < 1){
  die();
  return;
}

var main = function(){
  var myAccount1 = argv._[0];
  var myAccount2 = argv._[1];
  //var url = "ws://127.0.0.1:8091";
  var url = argv._[2];
  var nTx = argv._[3] || 15;
  nTx = parseInt(nTx);

  var end = false;
  process.on( "SIGINT", function() {
    console.log('CLOSING [SIGINT]');
    end = true;
  } );

  var nBlock = 0;
  var nTX = 0;
  lib.wallet.createWalletClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    async.whilst(
      function(){ return !end},
      function(cb){
        console.log("******* "+nBlock+"******* ");
        nBlock++;
        // Create random spam list
        var prefix = Math.random().toString(36).slice(2)
        var accounts = _.range(0,nTx);
        accounts = _.map(accounts,function(n){
          return "spam-"+n.toString()+"-"+prefix+"."+myAccount1;
        });
        //console.log(accounts);
        var iAccount = 0;
        async.each(accounts,function(account,_cb){
	  var iAccountCurr = iAccount;
          setTimeout(function(){
            //console.log(account);
            //client.create_account_with_brain_key("this is "+myAccount,account,myAccount,myAccount,true,function(err,r){
	    //client.transfer(myAccount1,myAccount2,"0.05","CORE","spam",true,function(err,r){
            //client.publish_asset_feed(myAccount1,"USD",JSON.parse(myAccount2),true,function(err,r){
            client.sell_asset(myAccount1,"1","CORE","0.005","USD",100,false,true,function(err,r){
	      if(err){
	          console.log("ERROR",err);
	      }
	      else{
		  console.log("TRANSFER",iAccountCurr,JSON.stringify(r));
                  nTX++;
	          //console.log("CREATED",account);
              }
              //console.log(err,r);
              _cb();
            })
          },iAccount*3000/nTx);
          iAccount++;
        },function(){
          cb();
        });
      },
      function(){
        console.log("nTX:",nTX);
        client.close(function(){
        });
      });
  });

};
main();
