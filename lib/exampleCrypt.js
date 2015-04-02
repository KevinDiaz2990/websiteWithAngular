"use strict;"
var crypto = require('crypto');

var hashThis = crypto.createHash('md5').update("Luigi").digest('hex');
var hashComp = crypto.createHash('md5').update('Luigi').digest('hex');
console.log(hashThis);
console.log(hashThis === hashComp);