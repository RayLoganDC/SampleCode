
/*
var testString = 'Test String';
console.log (testString);

var name = "fIrsT LAsT";
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
console.log(nameChanger(name));
*/


/*
// Change the following text to Udacity
var sampleText = 'audacity';
var newText = String('U' + sampleText.slice(2));
console.log (newText);

var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = String('U' + s.slice(2));
    
    return s;
};
// Did your code work? The line below will tell you!
console.log(udacityizer(s));
*/

/*
var skills = ["Technology", "Management", "Product"];
$("#main").append(skills);
*/

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));
