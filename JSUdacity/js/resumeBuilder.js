
var testString = 'Test';
console.log (testString);

var newString = testString.replace('Test', 'NewString');
console.log (newString);
//$("#main").append(newString);


var name = "RayLogan";
var role = 'Technology';
var email= "rayLoganDC@dauntless.mind"
//$("#main").append(name);

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);


var skills = ["Technology", "Management", "Product"];
var bio = {
    "name": "Ray",
    "role": "Technology",
    "contacts":{
      "mobile": "202-202-2000",
      "email": "rayLoganDC@dauntless.mind"  
    },
    "welcomeMsg": "Hello! Welcome",
    "skills": ["Technology", "Management", "Product"],
    "bioPic": "images/fry.jpg"
};


//$("#main").append(bio.name);
//bio.city = "WashDC";
//bio["email"] = email;
//$("#main").append(bio["city"]);
//$("#main").append(bio.email);

var education = {
    "school": "ABC Univ",
    "schoolCity": "ABC City"
};

var work = {
    "present": "XYZ Company",
    "presentCity": "XYZ City"
};

var projects = {
    "recent": "123 projects",
    "recentLength": "6 months"
};

function mySkills() {
    if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        
    }     
}
mySkills();

$("#workExperience").append(HTMLworkStart);