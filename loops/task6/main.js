function averagenum()
{
    let sum=0;
    let count=0;
    let average=0;
  
   
    for (let i = 0; i < 5; i++){

        let input= Number(prompt("Enter a number"));
        sum=sum+input;
        count++;
        
    }
    
    average= sum/count; 

    return console.log("the sum of", count + " numbers is", sum +" and their average is", average);

}
averagenum();