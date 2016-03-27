// URL parsing
<script>
	for(var i=0; i<items[i].length; i++) {
		var parser = document.createElement('a');
		parser.href = items[i];
		
		var ar = [parser.protocol, parser.host.split('.'), parser.pathname, parser.search];
	
		Document.write(ar);
	}
</script>

// Email validation
<script>
	for(var i=0; i<items[i].length; i++) {
		var regEx = /[A-Z0-9._]+@[A-Z0-9._]+.[A-Z]{2,4}/igm;
		if(items[i] == '' || !(regEx.test(items[i]))){
			Document.write(false);
		} else {
			Document.write(true);
		}
	}
</script>


// Array absurdity
<script>
	for(var i=0; i<items[i].length; i++) {
		var ar = item[i].split(';');
		var newAr = ar[1].split(',');
		newAr.sort();
		for(var i=0; i<newAr.length(); i++) {
			if(newAr[i] == newAr[i+1]) {
				Document.write(newAr[i]);
			}
		}
	}
</script>