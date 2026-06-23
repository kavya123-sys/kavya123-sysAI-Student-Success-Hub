let chart;

window.onload=function(){

const ctx=document.getElementById("careerChart");

chart=new Chart(ctx,{

type:"radar",

data:{

labels:[
"Software",
"AI",
"Cyber",
"Cloud",
"UI/UX",
"Data"
],

datasets:[{

label:"Career DNA",

data:[50,50,50,50,50,50]

}]

}

});

};

function analyzeCareer(){

let name=
document.getElementById("name").value;

let skills=
document.getElementById("skills").value.toLowerCase();

let goal=
document.getElementById("goal").value;

let career="";
let score=75;

let dna=[50,50,50,50,50,50];

if(
skills.includes("html") ||
skills.includes("css") ||
skills.includes("javascript")
){

career="Frontend Developer";

score=92;

dna=[95,60,40,50,85,45];

}

else if(
skills.includes("python")
){

career="AI Engineer";

score=94;

dna=[70,95,60,65,40,90];

}

else if(
skills.includes("network")
){

career="Cyber Security Engineer";

score=88;

dna=[60,55,95,70,35,50];

}

else{

career="Technology Professional";

}

document.getElementById(
"careerResult"
).innerHTML=

`
<h3>Hello ${name}</h3>

<p><b>Career Match:</b> ${score}%</p>

<p><b>Recommended Career:</b>
${career}</p>

<p><b>Goal:</b>
${goal}</p>

`;

chart.data.datasets[0].data=dna;

chart.update();

let readiness=
Math.min(score,100);

document.getElementById("score")
.innerHTML=
readiness+"%";

localStorage.setItem(
"career",
career
);

}

function generateRoadmap(){

let sem=
document.getElementById("semester").value;

let roadmap="";

if(sem==="Semester 3"){

roadmap=`
Learn HTML<br>
Learn CSS<br>
GitHub Basics
`;

}

if(sem==="Semester 4"){

roadmap=`
JavaScript<br>
Responsive Design<br>
Mini Projects
`;

}

if(sem==="Semester 5"){

roadmap=`
React<br>
Node.js<br>
Major Project
`;

}

if(sem==="Semester 6"){

roadmap=`
Internship Prep<br>
Resume Building<br>
Interview Practice
`;

}

document.getElementById(
"roadmap"
).innerHTML=roadmap;

}

function generateProject(){

let tech=
document.getElementById("projectTech").value;

let result="";

if(tech==="Web Development"){

result=`
<h3>Smart Attendance System</h3>

<p>
QR Based Attendance with Dashboard
</p>
`;

}

if(tech==="AI/ML"){

result=`
<h3>Student Career Predictor</h3>

<p>
AI Recommendation Engine
</p>
`;

}

if(tech==="Cyber Security"){

result=`
<h3>Password Strength Analyzer</h3>

<p>
Cyber Security Project
</p>
`;

}

if(tech==="Cloud Computing"){

result=`
<h3>Cloud File Manager</h3>

<p>
Storage Dashboard
</p>
`;

}

document.getElementById(
"projectOutput"
).innerHTML=result;

}
