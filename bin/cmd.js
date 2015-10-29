var _ = require('underscore'),
utils = require('./utils'),
async = require('async'),
argv = require('yargs').argv
lib  = require('../lib/');

var die = function() {
  console.log("bin/cmd");
  console.log("");
  console.log("USAGE: bin/cmd.js url cmd *args");
  process.exit(1);
}

if(argv._.length < 1){
  die();
  return;
}

var main = function(){
  var url = argv._[0];
  var cmd = argv._[1];
  var args = utils.parseArgs(argv._.slice(2));

  //args[2] = JSON.parse(args[2]);
  console.log(args);

  var cbLog = function(err,msg){
    console.log("LOG",err,msg);
  };

  //lib.wallet.createWalletClient({url:url,cbMessage:cbLog},function(err,client){
  lib.wallet.createWalletClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    var cb = function(err,r){
      if(err){
        console.log("ERROR",err);
      }
      else{
	console.log(r);
        console.log(JSON.stringify(r));
      }
      client.close();
    };
    args.push(cb);
    client[cmd].apply(this,args);
  });

};
main();
