//console.log(process.argv);
//var iArray = process.argv;
/*
var iSum = 0;
for (var i = process.argv.length - 1; i >= 2; i--) {
	iSum += +process.argv[i];
};
console.log(iSum);
*/

var items = process.argv[2]
for(var i=0; i<items[i].length; i++) {
		var parser = document.createElement('a');
		parser.href = items[i];
		
		var ar = [parser.protocol, parser.host.split('.'), parser.pathname, parser.search];
	
		console.log(ar);
}