var _ = require('underscore'),
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
  var args = argv._.slice(2);

  args = _.map(args,function(a){
    if(a === "true"){
      return true
    }
    else if(a === "false"){
      return false;
    }
    else if(_.isString(a) && a.match(/^\{/)){
      return JSON.parse(a);
    }
    else{
      return a.toString();
    }
  });
  //args[2] = JSON.parse(args[2]);
  console.log(args);


  lib.wallet.createWalletClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    var cb = function(err,r){
      if(err){
        console.log("ERROR",err);
      }
      else{
        console.log(r);
      }
      client.close();
    };
    args.push(cb);
    client[cmd].apply(this,args);
  });

};
main();
