
var testString = 'Test';
//console.log (testString);

var newString = testString.replace('Test', 'NewString');
//console.log (newString);
//$("#main").append(newString);


var name = "Ray Logan";
var role = 'Technology';
var email= "rayLoganDC@dauntless.mind";
//$("#main").append(name);

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);


var skills = ["Technology", "Management", "Product"];

/*
      name : string
      role : string
      contacts : an object with
            mobile: string
            email: string 
            github: string
            twitter: string 
            location: string
      welcomeMessage: string 
      skills: array of strings
      biopic: url
      display: function taking no parameters
*/
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


/*
      schools: array of objects with
           name: string
           location: string
           degree: string
           majors: array of strings
           dates: integer (graduation date)
           url: string
      onlineCourses: array with
           title: string
           school: string
           date: integer (date finished)
           url: string
      display: function taking no parameters
*/
var education = {
    "school": "ABC Univ",
    "schoolCity": "ABC City"
};


/*
      jobs: array of objects with
           employer: string 
           title: string 
           location: string 
           dates: string (works with a hyphen between them)
           description: string 
      display: function taking no parameters
*/
var work = {
    "present": "XYZ Company",
    "presentCity": "XYZ City"
};

/*
      projects: array of objects with
            title: string 
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
      display: function taking no parameters
*/
var projects = {
    "projects":[
        {
            "title": "Current projects",
            "dates": "1/2016 - Present",
            "desc": "Current project"
        },
        {
            "title": "Second project",
            "dates": "1/2015 - 12/2015",
            "desc": "Second project"
        },
        {
            "title": "Third projects",
            "dates": "1/2014 - 12/2014",
            "desc": "Third project"
        }
    ],
    "display": function(){
    for (var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
        $(".project-entry:last").append(formattedDesc);
      }
  }
};
console.log(projects.projects.length);




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


function inName(name) {
    var names = name.trim().split(" ");
    console.log(names);
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var finalName = names.join(" ");
    return finalName;
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

