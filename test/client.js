var expect = require('expect.js'),
    _      = require('underscore'),
    lib    = require('../lib/client.js');

describe('client', function() {

  it('connect good url', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      done();
    });
  });

  it('connect error url', function(done) {
    var url = "ws://127.0.0.1:9099";
    lib.createClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be.an('object');
      expect(err.code).to.be('ECONNREFUSED');
      done();
    });
  });

  it('connect send raw', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      client._send('{"id":1, "method":"call", "params":[0,"get_accounts",[["1.2.0"]]]}',function(err,r){
        expect(err).to.be(false);
        expect(r).to.have.length(1);
        done();
      });
    });
  });

  it('connect send api', function(done) {
    var url = "ws://127.0.0.1:8091";
    lib.createClient(url,function(err,client){
      //console.log("err",err,client);
      expect(err).to.be(false);
      client.send(0,"get_accounts",[["1.2.0"]],function(err,r){
        expect(err).to.be(false);
        expect(r).to.have.length(1);
        done();
      });
    });
  });


});
