// by entering in the node.js REPL and typing crypto. and tabbing twice I recognized a method called crypto.randomUUID() in order to create an unique random ID.

const crypto = require('crypto');

const randomID = crypto.randomUUID();

console.log(randomID);