var expect = require('expect.js'),
    _      = require('underscore'),
    lib    = require('../lib/wallet.js');

describe('wallet', function() {

  it('transfer', function(done) {
    var url = "ws://127.0.0.1:8099";
    lib.createWalletClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      console.log(client);
      client.transfer("spartako","spartako1",10,"CORE","",false,function(err,r){
        expect(err).to.be(false);
        console.log(r);
        done();
      });
    });
  });



});
