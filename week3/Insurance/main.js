const form = document.querySelector("form");
const customer = document.querySelector("#name");
const customerage = document.querySelector("#age");
const health = document.querySelectorAll('input[class="condition"]');
const bad = document.querySelectorAll('input[class="habits"]');
const good = document.querySelectorAll('input[class="goodhabits"]');
const calculate = document.querySelector("#calculate");

const calprice = (event) => {
  event.preventDefault();
  let CusName = customer.value;
  let age = customerage.value;
  let healthResult = [];
  let goodhabits = [];
  let badhabits = [];
  let price = 0;

  console.log(CusName);
  console.log(age);

  if (age < 18) {
    price += 500;
  } else if (age > 18 && age <= 25) {
    price += 550;
  } else if (age > 26 && age <= 35) {
    price += 650;
  } else if (age > 36 && age <= 45) {
    price += 800;
  } else if (age > 46 && age <= 55) {
    price += 1000;
  } else if (age > 56 && age <= 65) {
    price += 1250;
  } else if (age >= 66) {
    price += 1550;
  }

  console.log(price);

  health.forEach((item) => {
    if (item.checked) {
      healthResult.push(item.value);
    }
  });

  if (healthResult.length === 1) {
    price += 0.01 * price;
  } else if (healthResult.length === 2) {
    price += 0.02 * price;
  } else if (healthResult.length === 3) {
    price += 0.03 * price;
  }

  bad.forEach((item) => {
    if (item.checked) {
      badhabits.push(item.value);
    }
  });

  if (badhabits.length === 1) {
    price += 0.05 * price;
  }

  else if(badhabits.length===2){
    price += 0.10*price;
  }

  else if(badhabits.length===3){
    price += 0.15*price;
  }



  good.forEach((item) => {
    if (item.checked) {
      goodhabits.push(item.value);
    }
  });

  if (goodhabits.length === 1) {
    price -= 0.05 * price;
  }

  calculate.innerHTML = `Hi, <span>${CusName}</span> your total price for insurance premium is: <span>${price}<span>.`;


  form.reset();


};

form.addEventListener("submit", calprice);
