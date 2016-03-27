var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var stdin ="";
rl.question("",function(answer) {

    stdin = (answer);


    rl.close();
    var res = stdin.split(";");
    var res1 = stdin.split(",");
    var countOfElems = parseInt(res[0]);
    var fg = new Array();
    for(var j=1;j<countOfElems; j++)
    {
        fg.push(res1[j]);
    }
    function eliminateDuplicates(arr) {
        var i,
            len=arr.length,
            out=[],
            obj={};

        for (i=0;i<len;i++) {
            obj[arr[i]]=0;
        }
        for (i in obj) {
            out.push(i);
        }
        return out;
    }
    return eliminateDuplicates(fg);


});