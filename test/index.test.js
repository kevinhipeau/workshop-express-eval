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


});