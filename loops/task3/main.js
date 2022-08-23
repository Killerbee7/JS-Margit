function averagespeed()
{
    let stops;

    while (stops != 0) {
    
    let distance = prompt("Enter distance:");
    
    
    if(distance == 0){
        return console.log("The program ends");
    }

    else{
        const time = prompt("Enter time:");
        let average = distance/time;
        return console.log("The average is:",average);
    }
}

}

averagespeed()