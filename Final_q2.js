const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

/*PLANNING
let badge = {
  "new":0, "easy":0, "medium":0, "hardest":0, "apocolypse":0
};

function ShowStatus(){
    for(let i=0; i<badge.length;){ 
        console.log(`The current status of this mode: ${badge[i]}`) 
    } 
    StartApp(); 
} 

function AddPoints(){
  readline.question("which mode do you want to add a point to?")
    for(let i=0; i<badge.length; i+1){ 
        console.log("Mode Adjusted") 
    } 
    StartApp(); 
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }

    else if(_command === "status"){
      ShowStatus();
    }

    else if(_command === "add"){
      AddPoints();
    }
  })
}

StartApp();

code all this and hope it works so i get a good grade in this course! :D

CHALLENGE 1 PLANNING
function MakeBadge(){
for(let i=1; i<=1; i++){
if(i<10){
console.log("horrible newbie")
}
if(i>=10 && i<=20){
console.log("adventurer")
}
if(i>=21 && i<=30){
console.log("slayer")
}
if(i>=31 && i<=40){
console.log("divined")
}
if(i>41){
console.log("eternal")
}
}
StartApp();
}

else if(_command === "make badge"){
  MakeBadge();
}

code all this and hope it works so i get an extra good grade in this course! :D
*/

let badge = {
  "new":0, "easy":0, "medium":0, "hardest":0, "apocolypse":0
};

//rename this to ShowStatus
function ShowStatus(){
  for(let i=0; i<badge.length;){ 
      console.log(`The current status of this mode: ${badge[i]}`) 
  } 
  StartApp(); 
} 

//rename this to AddPoints
function AddPoints(){
  readline.question("which mode do you want to add a point to?")
    for(let i=0; i<badge.length; i+1){ 
        console.log("Mode Adjusted") 
    } 
    StartApp(); 
}

function MakeBadge(){
  for(let i=1; i<=1; i++){
  if(i<10){
  console.log("horrible newbie")
  }
  if(i>=10 && i<=20){
  console.log("adventurer")
  }
  if(i>=21 && i<=30){
  console.log("slayer")
  }
  if(i>=31 && i<=40){
  console.log("divined")
  }
  if(i>41){
  console.log("eternal")
  }
  }
  StartApp();
  }

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }

    else if(_command === "status"){
      ShowStatus();
    }

    else if(_command === "add"){
      AddPoints();
    }

    else if(_command === "make badge"){
      MakeBadge();
    }
  })
}

StartApp();