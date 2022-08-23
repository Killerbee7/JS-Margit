function gasolineprice()
{
    let quantity;
    let price = Number(prompt("Please enter price of gasoline"));
    let money = Number(prompt("Please enetr money you want to spend"));

    quantity = money/price;
    console.log(quantity);

    if (quantity>10){
        console.log("Good, you can escape now")
    }

    else console.log("Ups, you have to stay here");


}
gasolineprice()