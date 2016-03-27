/**
 * New node file
 */

var fs = require('fs')

//console.log(process.argv);
var buf = process.argv[2];
//var buf = "abcde";

//var iBufLen = buf.toString().split("//").length;
var tempbuf = buf.replace(":", "");
console.log ("Input: " + tempbuf);

var sBuffArray = buf.toString().split("//");

console.log ("Input: " + buf);
console.log ("Input array: " + sBuffArray);
console.log ("Array length: " +  sBuffArray.length);
console.log ("Reverse Array: " + sBuffArray.reverse());
console.log ("Input array: " + sBuffArray);
console.log (sBuffArray.join().replace(/,/g, ""));
