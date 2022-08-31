function smallestnum(){

    let smallestnum=0;
    let i=0;

    let input =Number(prompt("Enter how many numbers you want to enter:"));




for(i=0; i<input; i++){

    let num= Number(prompt("Enter a number"));

    if (smallestnum<num && smallestnum==0){
        smallestnum=num;

    }


}
console.log(smallestnum);


}

smallestnum();