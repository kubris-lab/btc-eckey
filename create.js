var bitcore = require('bitcore-lib')
var message = require('bitcore-message')
var privateKey = new bitcore.PrivateKey();
var publicKey = privateKey.publicKey;
console.log("publicKey " + publicKey);
var address = publicKey.toAddress();
//console.log("address: " + address);
var exported = privateKey.toWIF();
console.log("privateKey: " + privateKey);
//console.log("private WIF: " + exported);
var stdin = process.openStdin();
console.log("enter the message to sign:")
stdin.addListener("data", function(d) {
 	var signature = message(d.toString().trim()).sign(privateKey)
	console.log("x-signature:" + signature);
	process.exit();
  });
  
  

