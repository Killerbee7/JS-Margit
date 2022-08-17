function checkRandomnum(){

const a = prompt("enter first number");
const b = prompt("enter second numbe");
const c = prompt("enter third number");

let sum, mult;

if (a >= 0 && b >= 0  && c >= 0 )   {
   sum = a+b+c;
   mult = a*b*c;
   return console.log("sum is:",sum, "and multiplication is:", mult);
}

else {
    return console.log("sorry");
}
};

checkRandomnum()