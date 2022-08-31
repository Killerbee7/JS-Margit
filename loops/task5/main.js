function averageNums()
{
    let input ;
    let count = 0;
    let sum = 0;
    let averageNums= 0;
   


    while(input != 0) {

        input= Number(prompt("Enter a number"));
        sum = sum + input;
        count += 1 ;
        
        
    }
    return console.log("The sum of",count-1 +"numbers is",sum+ "and the average is", sum/(count-1));
}

averageNums();