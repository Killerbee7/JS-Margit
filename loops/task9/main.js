function twobigNum()
{
let n=0;
max=0;
nextmax=0;

    for(n=0; n<3; n++){
        num= Number(prompt("Enter a number"));
   
    }

    if ( num>=0 && max==0){
        max=num
    }

    else if(num<max){
        nextmax=num
    }

    console.log(max);
    console.log(nextmax);
};

twobigNum();