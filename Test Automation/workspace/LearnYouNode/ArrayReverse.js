/**
 * New node file
 */
// console.log (process.argv.reverse());

//var buf = process.argv[2];
var buf = "abcde";
var iBufLen = buf.toString().split("").length;
var sBuffArray = buf.toString().split("");
console.log (buf);
console.log (iBufLen);
console.log (sBuffArray);
console.log (sBuffArray.reverse());
console.log (sBuffArray.join().replace(/,/g, ""));