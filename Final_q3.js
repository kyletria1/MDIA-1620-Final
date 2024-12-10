const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/*PLANNING
let userColors = ["red", "green", "blue", "yellow", "orange"];
let theme = {
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true,
};

function AddUserColor(){
      if(settings.allowAdd === true){ 
        readline.question("What is the name of the color you want to add? ", _name=>{ 
            userColors.push(_name);  
            StartApp(); 
        }) 
} 

function DisplayUserColors(){
      if(settings.allowAdd === true){ 
        readline.question("What is the name of the color you want to add? ", _name=>{ 
            userColors.push(_name);  
            StartApp(); 
        }) 
}
        
function ToggleThemeColor(){
  readline.question("What color do you want to toggle?")
  theme === !theme
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }

    else if(_command === "add"){
      AddUserColor();
    }

    else if(_command === "display"){
      DisplayUserColors();
    }

    else if(_command === "toggle"){
      ToggleThemeColor();
    }
  })
}

StartApp();}}

code all this and hope it works so i get a good grade in this course! :D
*/
let userColors = ["red", "green", "blue", "yellow", "orange"];
let theme = {
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true,
};

function AddUserColor(){
  if(settings.allowAdd === true){ 
    readline.question("What is the name of the color you want to add? ", _name=>{ 
        userColors.push(_name);  
        StartApp(); 
    }) 
} 

//rename this to DisplayUserColors
/*function Function2(){
  //add a color to userColors
}
? 
*/

function DisplayUserColors(){
  if(settings.allowAdd === true){ 
    readline.question("What is the name of the color you want to add? ", _name=>{ 
        userColors.push(_name);  
        StartApp(); 
    }) 
}

function ToggleThemeColor(){
  readline.question("What color do you want to toggle?")
  theme === !theme
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }

    else if(_command === "add"){
      AddUserColor();
    }

    else if(_command === "display"){
      DisplayUserColors();
    }

    else if(_command === "toggle"){
      ToggleThemeColor();
    }
  })
}

StartApp();}}