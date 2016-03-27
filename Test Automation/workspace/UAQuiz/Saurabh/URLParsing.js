process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
    stdin += chunk;
}).on('end', function() {
    
    var lines = stdin.split('\n');
        for(var i=0; i<lines.length; i++) {
        process.stdout.write(lines[i]);
    }
    
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        terminal: false
    });
    rl.on('line', function(line){
    stdin =+line;}
    
});

