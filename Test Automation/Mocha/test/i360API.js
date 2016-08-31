var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("https://api.i-360.com");

// UNIT test begin

describe("i360 API Test Suite",function(){

  // #1 should return home page

  it("should return home page",function(done){
    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      console.log(res);
      done();
    });
  });



});
