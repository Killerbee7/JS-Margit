function militaryage(){
    let age = prompt("What is your age?");

    if (age < 18){
        return console.log("too young");
        }
    else if (age >=18 && age < 27 ){ 
        return console.log("Right age for military service");
    }
    else if (age >= 27 && age < 41 ){ 
        return console.log("You are in reserve") ; 
    }
    else if (age >=41 && age < 55 ){ 
        return console.log("you are in backup reserve"); 
    }

    else { 
        return console.log("too old"); 
    }
}

militaryage();