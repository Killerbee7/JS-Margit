function averagenum()
{
    let sum =0;
    let average=0;
    let confirm;
    let count=0;

    
    while (confirm!="n")
    {
        let input= Number(prompt("Enter a numebr"));
        confirm=prompt("Do you want to continue, (y/n)");
            sum = sum + input;
            count++;
    }

        console.log("The sum of",count + " numbers is" , sum + " and their average is", sum/count );


}


averagenum();

// By using do while


/*let sum =0;
let average=0;
let confirm;
let count=0;




	do{
	    let input= Number(prompt("Enter a numebr"));
	    confirm=prompt("Do you want to continue, (y/n)");
	    sum = sum +input;
	    count++;
	
	}while (confirm !=="n");
	
	console.log("The sum of",count + " numbers is" , sum + " and their average is", sum/count );*/