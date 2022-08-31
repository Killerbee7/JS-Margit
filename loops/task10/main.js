function twobigNum()
{
let n=0;
let smallnum=0;
let bignum=0;
let sum=0;
let average=0;

    for(n=0; n<5; n++){
        num= Number(prompt("Enter a number"));
        sum=sum+num;
        average=sum/5;
        
    

    if(num>bignum){
        bignum=num;
    }

    if (smallnum<num && smallnum ==0) {
        smallnum = num;
      } 
      
   
    }
      
      console.log(sum);
      console.log(average);
      console.log(bignum);
      console.log(smallnum);

    

}

twobigNum();