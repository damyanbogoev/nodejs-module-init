exports.randomString = function(length) {
    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
    	var index = Math.floor(Math.random() * charSet.length);
    	result += charSet.substring(index, index+1);
    }
    
    return result;
};