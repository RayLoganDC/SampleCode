// console.log (process.argv.reverse());


var buf = "1345"; // hard-coded input
//var buf = process.argv[2]; //node input
var sBufLen = buf.toString().split("").length
var sBuffArray = buf.toString().split("")
console.log (buf)
console.log (sBufLen)
console.log (sBuffArray)
console.log (sBuffArray.reverse())

	
function array_reverse() {
	//var buf = process.argv[2]
	var buf = "1,3,4,5";
	var sBufLen = buf.toString().split(",").length;
	var sBuffArray = buf.toString().split(",");
	console.log (buf);
	console.log (sBufLen);
	console.log (sBuffArray);
	alert ("Array length: " + sBufLen + ";  " + "Array " + sBuffArray);
	console.log (sBuffArray.reverse());	
	alert("Reverse array " + sBuffArray);
}

