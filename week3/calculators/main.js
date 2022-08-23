document.getElementById("").addEventListener("Calculate", gasolineprice);

function gasolineprice()
{
    let quantity;
    let price = Number(prompt.getElementById("price")).value;
    let money = Number(prompt.getElementById("money")).value;

    quantity = money/price;
    console.log(quantity);

    if (quantity>10){
        console.log("Good, you can escape now")
    }

    else console.log("Ups, you have to stay here");


}
gasolineprice()