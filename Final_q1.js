const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

/*PLANNING
let registry = [];
let settings = {
allowalcohol:true
};

function RegisterUser(){
    if(settings.allowAdd === true){ 

        console.log("function works") 
        readline.question("What is the age of the user? ", _name=>{ 
            registry.push(_name); 
            StartApp(); 
        }) 
    } else { 
        console.log("please try again") 
    } 
} 

function ToggleAlcohol(){
  console.log("function works")
  allowalcohol === !allowalcohol
}

function NotifyAll(){
console.log("function works") 
    for(let i=0; i<names.length; i++){ 
        console.log(`The name is ${names[i]}`) 
    } 
    StartApp(); 
} 

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }

    else if(_command === "register user"){
      function RegisterUser();
    }

    else if(_command === "toggle alcohol"){
      function ToggleAlcohol();
    }

    else if(_command === "notify all"){
      function Notify All();
    }
  })
}

code all this and hope it works so i get a good grade in this course! :D

CHALLENGE 1 PLANNING
let settings = {
minimumage:19,
}

function ChangeAge(){
readline.question("What do you want to change the age to?"), age=>{
  minimumage.push((Number(age)));
  StartApp();
}

 else if(_command === "change age"){
      ChangeAge();
    }

code all this and hope it works so i get an extra good grade in this course! :D
*/

let registry = [];
let settings = {
  allowalcohol:true,
  minimumage:19,
};

function RegisterUser(){
  if(settings.allowalcohol === true){  
      readline.question("What is the age of the user?"), age=>{ 
          registry.push((Number(age)));
          Numbers();  
  if(settings.allowalcohol === false){
  console.log("Everyone is welcome in here!")
}
StartApp();
}

function Numbers(){
  if (age>=19){
    console.log("You are allow to drink in here.")
  }
  else if (age<=18){ 
  console.log("You are not allowed in here.") 
  }
  StartApp();
}

function ToggleAlcohol(){
  console.log("function works")
  allowalcohol === !allowalcohol
  StartApp(); 
}

function NotifyAll(){
  if(settings.allowalcohol === false) 
          console.log("Everyone is welcome in here!")  
      StartApp(); 
    }
    
function ChangeAge(){
      readline.question("What do you want to change the age to?"), age=>{
        minimumage.push((Number(age)));
        StartApp();
  }   
    

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }

    else if(_command === "register user"){
      RegisterUser();
    }

    else if(_command === "toggle alcohol"){
      ToggleAlcohol();
    }

    else if(_command === "notify all"){
      NotifyAll();
    }

    else if(_command === "change age"){
      ChangeAge();
    }
  })
}

StartApp();}}}