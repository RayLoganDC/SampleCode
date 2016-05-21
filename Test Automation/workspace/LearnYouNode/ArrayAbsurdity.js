
var items = "20;0,1,10,3,2,4,5,7,6,8,11,9,15,12,13,4,16,18,17,14";
//var items = process.argv[2];

console.log(items);
console.log(items.length);
var ar = items.split(';');
//console.log(ar.length);
//console.log (ar);
var newAr = ar[1].split(',');
//console.log(newAr);
newAr.sort();
//console.log(newAr);
console.log(newAr.length);
for(var i=0; i<newAr.length; i++) {
	if(newAr[i] == newAr[i+1]) {
        console.log(newAr[i]);
	}
}

function array_absurdity() {
	var items = "20;0,1,10,3,2,4,5,7,6,8,11,9,15,12,13,4,16,18,17,14";

	alert(items);
	alert(items.length);
	var ar = items.split(';');
	//alert(ar.length);
	//alert(ar);
	var newAr = ar[1].split(',');
	//alert(newAr);
	newAr.sort();
	//alert(newAr);
    alert(newAr.length);
	for(var i=0; i<newAr.length; i++) {
		if(newAr[i] == newAr[i+1]) {
	        alert(newAr[i]);
		}
	}
}


