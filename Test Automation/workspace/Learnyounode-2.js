//console.log(process.argv);
//var iArray = process.argv;
var iSum = 0;
for (var i = process.argv.length - 1; i >= 2; i--) {
	iSum += +process.argv[i];
};
console.log(iSum);