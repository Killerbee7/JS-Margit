function calculatesalary()

{
    let hours = Number(prompt("Enter hours worked"));
    let salary1, salary2, salary3;


if (hours <= 7) {
    salary1 = hours*10;
    return console.log(" Your salary for today is:", salary1);

}

if (hours > 7 && hours <=9 ){
    salary2 = (hours*10 + (hours-7)*5);
    return console.log("your salary for today is:", salary2);
}

else (hours > 9)
    salary3 = ((hours*10) + 10 + (hours-9)*10 );
    return console.log("your salary for today is:", salary3);


};

calculatesalary()