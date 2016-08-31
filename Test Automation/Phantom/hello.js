console.log ("Hello World!");
//phantom.exit ();

console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://phantomjs.org/';
page.open(url, function (status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }

  //Page is loaded!
  phantom.exit();
});
