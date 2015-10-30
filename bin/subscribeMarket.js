var _ = require('underscore'),
utils = require('./utils'),
async = require('async'),
argv = require('yargs').argv
lib  = require('../lib/');

var die = function() {
  console.log("bin/cmd");
  console.log("");
  console.log("USAGE: bin/subscribeMarket.js url *args");
  process.exit(1);
}

if(argv._.length < 1){
  die();
  return;
}

var main = function(){
  var url = argv._[0];



  var args = utils.parseArgs(argv._.slice(1));

  //args[2] = JSON.parse(args[2]);

  var cbLog = function(msg){
    console.log("LOG",JSON.stringify(msg));
  };

  var subscribe = function(r){
    console.log("NOTICE",JSON.stringify(r));
  }
  args = [subscribe].concat(args);

  lib.witness.createWitnessClient({url:url,cbMessage:cbLog},function(err,client){
  //lib.witness.createWitnessClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    var cb = function(err,r){
      if(err){
        console.log("ERROR",err);
      }
      else{
        console.log("RES",JSON.stringify(r));
      }
      //client.close();
    };
    args.push(cb);
    client.subscribe_to_market.apply(this,args);
  });

};
main();
