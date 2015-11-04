var _ = require('underscore'),
utils = require('./utils'),
async = require('async'),
argv = require('yargs').argv
lib  = require('../lib/');

var die = function() {
  console.log("bin/getAccountHistoryAsset");
  console.log("");
  console.log("USAGE: bin/getAccountHistoryAsset.js url account asset");
  process.exit(1);
}

if(argv._.length !== 3){
  die();
  return;
}

var main = function(){
  var url = argv._[0];
  var account = argv._[1];
  var asset = argv._[2];
  var args = utils.parseArgs(argv._.slice(2));

  lib.wallet.createWalletClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    // get asset id
    client.get_asset(asset,function(err,a){
      if(err){console.log(err);process.exit()};
      client.get_account_history(account,10000,function(err,ops){
        if(err){console.log(err);process.exit()};
        ops = _.filter(ops,function(o){
          return (o.op.op[0] === 0) && (o.op.op[1].amount.asset_id === a.id);
        });
        ops = _.map(ops,function(o){
          return o.description;
        });
        _.each(ops,function(o){
          console.log(o);
        });
        client.close();
      });
    });
  });

};
main();
