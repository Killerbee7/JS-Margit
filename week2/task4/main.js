function checkRandomnum(){

const a =Number(prompt("enter first number"));
const b =Number(prompt("enter second numbe"));
const c =Number(prompt("enter third number"));

let sum, mult;

if (a >= 0 && b >= 0  && c >= 0 )   {
   sum = a+b+c
   mult = a*b*c;
   return console.log("sum is:",sum, "and multiplication is:", mult);
}

else if (a >= 0 || b >= 0  || c >= 0 ) {
    sum  = a+b+c
    return console.log("sum is;", sum);
}

else (a < 0 && b < 0  && c < 0) 
    return console.log("Only negatives");

};

checkRandomnum()