var _ = require('underscore'),
async = require('async'),
argv = require('yargs').argv
lib  = require('../lib/');

var die = function() {
  console.log("bin/lastBlocks");
  console.log("");
  console.log("USAGE: bin/lastBlocks.js url [nBlock]");
  process.exit(1);
}

if(argv._.length < 1){
  die();
  return;
}

var main = function(){
  //var url = "ws://127.0.0.1:8091";
  var url = argv._[0];
  var nBlock = argv._[1] || 10;
  nBlock = parseInt(nBlock);

  lib.witness.createWitnessClient(url,function(err,client){
    if(err){console.log(err);process.exit()};
    client.get_dynamic_global_properties(function(err,r){
      var head_block_number = r.head_block_number;
      async.whilst(
	function () { return head_block_number > (r.head_block_number-nBlock); },
	function (cb) {
	  async.waterfall([
	    function(_cb) {
	      client.get_block(head_block_number,function(err,r){
		//console.log(err,r);
		_cb(err,r);
	      });;
	    },
	    function(r,_cb) {
	      client.get_witnesses([r.witness],function(err,r1){
		//console.log(err,r1);
		r.witness_account = r1[0].witness_account;
		_cb(err,r);
	      });;
	    },
	    function(r,_cb) {
	      client.get_accounts([r.witness_account],function(err,r1){
		//console.log(err,r1);
		r.name = r1[0].name
		_cb(err,r);
	      });
	    },
	  ], function (err, result) {
	    console.log(head_block_number,result.witness,result.name,result.transactions.length,result.timestamp);
	    head_block_number--;
	    cb();
	  });
	},
	function (err) {
	  process.exit();
	}
      );
    });
  });

};
main();
