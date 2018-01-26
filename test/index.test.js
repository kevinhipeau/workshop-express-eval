var expect = require('chai').expect;
var app = require("../index");
var chaiHttp = require('chai-http');
var chai = require('chai');
chai.use(chaiHttp);
describe('Express test', function () {
  it('Server send The bingo game is already started and known numbers are 31 ,10 ,80 ,44 ,66 for get /bingo', function (done) {
    chai.request(app)
      .get('/bingo')
      .end(function (err, res) {
        expect(res.text).to.equal("The bingo game is already started and known numbers are 31");
        done();
      });
  });
  it("Server send The bingo game is already started, sorry your numbers doesn't match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo  for get /bingo?mynumbers=31,10,80,44", function (done) {
    chai.request(app)
      .get('/bingo?mynumbers=31,10,80,44')
      .end(function (err, res) {
        expect(res.text).to.equal("The bingo game is already started, sorry your numbers doesn't match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo");
        done();
      });
  });
  it('Server send  for get /bingo?mynumbers=31,10,80,44,66', function (done) {
    chai.request(app)
      .get('/bingo?mynumbers=31,10,80,44,66')
      .end(function (err, res) {
        expect(res.text).to.equal("Bingo");
        done();
      });
  });
});