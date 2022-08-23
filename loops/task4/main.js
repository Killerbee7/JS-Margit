function evenNumCount()
{
    let evenNums= 0;
    for(i=0; i<5; i++){
    let num = Number(prompt("Enter number"));

    if (num % 2 == 0 ){
        evenNums += 1;
        
     }
    }
    return console.log("Even number count is:", evenNums) 
}

evenNumCount()