const form = document.querySelector("form");
const customer = document.querySelector("#Name");
const size= document.querySelectorAll("[name=pizza]");
const toppings= document.querySelectorAll("[name=topping]");
const delivery= document.querySelector("#delivery");
const order= document.querySelector("#result");



const PizzaOrder = (event) => {
  event.preventDefault();
  let customername = customer.value;
  console.log(customername);
 
  let pizzasize="";
  let toppingresult=[];
  let price = 0;
  let delmethod= delivery.options[delivery.selectedIndex].value



  size.forEach((item)=>{
    if (item.checked){
    pizzasize=item.value;
    }
  });

  switch(pizzasize){
    case "one":
    price = price + 7.5;
    break;
  
    case "two":
    price += 10.5;
    break;
  ss
    case "three":
    price += 12.5;
    break;
  
    case "four":
    price += 15.5;
    break;

    
    }

    toppings.forEach((item) => {
      if(item.checked){
        toppingresult.push(item.value);
      }

    });

    if (toppingresult.length>4){
      price += (toppingresult.length-4)*0.5;
    }


    if (delmethod="Homedelivery"){
      price+=5;
    }
    console.log(price);

    order.innerHTML = `Hi, <span>${customername}</span>. You ordered pizza for <span>${pizzasize}</span> people.Toppings you selected are: <span>${toppingresult.join(
      ', '
    )}</span> and delivery method is: <span>${delmethod}</span>. Total price is: <span>${price} €</span>.`;


    form.reset();
};




form.addEventListener("submit", PizzaOrder);
