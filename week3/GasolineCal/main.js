function gasolineprice() {
  const price = +document.querySelector("#price").value;
  const money = +document.querySelector("#money").value;

  console.log("price:", price, "money:", money);

  const quantity = money / price;
  console.log("quantity of fuel you get:", quantity);

  const answer = document.querySelector("#quantity");
  let result = document.querySelector("#result");

  let text;

  if (quantity > 10) {
    text = "you get " + quantity + " l good, you can escape now";
  } else {
    text = "you get " + quantity + " l Ups, you have to stay here";
  }
  result.textContent = text;
}
