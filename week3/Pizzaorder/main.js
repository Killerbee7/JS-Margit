const form = document.querySelector("form");
const customer = document.querySelector("#Name");

const takeOrder = (event) => {
  event.preventDefault();
  let customername = customer.value;
  console.log(customername);
};

form.addEventListener("OrderPizza", takeOrder);
