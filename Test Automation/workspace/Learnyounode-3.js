var fs = require('fs')
/*
fs.readFile('Learnyounode-2.js', function (err, data) {
  if (err) throw err;
  console.log(data);
})
*/

//var sFileName = 'Learnyounode-2.js'
//console.log(fs.readFileSync(sFileName))


var buf = fs.readFileSync(process.argv[2])
var sBuffer = buf.toString().split("\n").length
console.log (sBuffer)

/*
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
*/