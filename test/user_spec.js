var should = require("should");

var User = require("../model/user");

describe("User", function() {
   
   describe("defaults", function(){
      
      var user = {};
      var email = "sample.email@gmail.com";
      before(function(){
         user = new User({ "email": email }); 
      });
      
      it("email is " + email, function(){
         user.email.should.equal(email);
      });

      it("has authenticationToken", function() {
         user.authenticationToken.should.not.equal(null);
      });
      
   });
    
});