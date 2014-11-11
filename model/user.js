var assert = require("assert");
var utility = require("../lib/utility");

var User = function(args){
    assert.ok(args.email, "Email is required.");
    
    var user = {};    
    user.email = args.email;
    user.authenticationToken = args.authenticationToken || utility.randomString(18);
    
    return user;
};

module.exports = User;