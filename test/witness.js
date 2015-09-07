var expect = require('expect.js'),
    _      = require('underscore'),
    lib    = require('../lib/witness.js');

describe('witness', function() {

  it('get_accounts', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createWitnessClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      console.log(client);
      client.get_accounts(["1.2.0"],function(err,r){
        expect(err).to.be(false);
        console.log(r);
        done();
      });
    });
  });

  it('get_dynamic_global_properties', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createWitnessClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      console.log(client);
      client.get_dynamic_global_properties(function(err,r){
        expect(err).to.be(false);
        console.log(r);
        done();
      });
    });
  });

  it('get_block', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createWitnessClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      console.log(client);
      client.get_block(1,function(err,r){
        expect(err).to.be(false);
        console.log(r);
        done();
      });
    });
  });

  it('get_witnesses', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createWitnessClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      console.log(client);
      client.get_witnesses(["1.6.1"],function(err,r){
        expect(err).to.be(false);
        console.log(r);
        done();
      });
    });
  });

});
