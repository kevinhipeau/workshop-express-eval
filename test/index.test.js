var expect = require('chai').expect;
var app = require("../index");
var chaiHttp = require('chai-http');
var chai = require('chai');
chai.use(chaiHttp);
describe('Express test', function () {

  it('Server is on', function () {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Server is on on config port', function () {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Server send 31 ,10 ,80 ,44 ,66 for get /bingo', function () {
    chai.request(app)
      .get('/bingo')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.eql("31 ,10 ,80 ,44 ,66");
        done();
      });
  });

});