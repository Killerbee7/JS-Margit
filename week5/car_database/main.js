const searcharea = document.querySelector("#searcharea");
const srchBtn = document.querySelector(".search");
let result = document.getElementById("searchresult");

const form = document.getElementById("form");
const table = document.getElementById("tableData");
const submit = document.getElementById("addcar");
const reset = document.getElementById("reset");
const resetTable = document.getElementById("resetTable");

let count = 0;
let carData = [];

//search vehicle by licence number

function searchCar() {



  let search = searcharea.value.toUpperCase();

  let response = carData.find((data) => data.licenceNum === search);
  if (search.length===0){
    result.classList.add("search-result");
    result.innerHTML="Please enter lincence plate number to search."
  }
  else if (response) {
    result.classList.add("search-result");
    result.innerHTML = `The vehicle ${response.licenceNum} is registered to ${response.carOwner} is ${response.carMaker} (${response.carModel}), of color (${response.carColor}), first registered in year ${response.carYear}.`;
  } else {
    result.classList.add("search-result");
    result.innerHTML = `Result not found for license number: ${search}`;
  }
}




// adding car to database


submit.addEventListener("click", (e) => {
  class Car {
    constructor(carOwner, licenceNum, carMaker, carModel, carYear, carColor) {
      (this.carOwner = carOwner),
        (this.licenceNum = licenceNum),
        (this.carMaker = carMaker),
        (this.carModel = carModel),
        (this.carYear = carYear);
      this.carColor = carColor;
    }
  }
   if (
    !carOwner ||
    !licenceNum ||
    !carMaker ||
    !carModel ||
    !carYear ||
    !carColor
  ) {
    return false;
  } else {
    let carOwner = document.querySelector("#carOwner").value.toUpperCase();
    let licenceNum = document.querySelector("#licenceNum").value.toUpperCase();
    let carMaker = document.querySelector("#carMaker").value.toUpperCase();
    let carModel = document.querySelector("#carModel").value.toUpperCase();
    let carYear = document.querySelector("#carYear").value.toUpperCase();
    let carColor = document.querySelector("#carColor").value.toUpperCase();

    let newCar = new Car(
      carOwner,
      licenceNum,
      carMaker,
      carModel,
      carYear,
      carColor
    )

    carData.push(newCar);

    const tableData = document.createElement("tr");
    table.appendChild(tableData);
    tableData.innerHTML = `<td>${carOwner}</td><td>${licenceNum}</td><td>${carMaker}</td><td>${carModel}</td><td>${carYear}</td><td>${carColor}</td>`;    
  }
  e.preventDefault();
  form.reset();
})

// resets table

function tableClear() {
  tableData.remove("tr");
  result.innerHTML="";
  result.classList.remove("search-result");
}

function resetForm(){
  form.reset();
}
srchBtn.addEventListener("click", () => {
  
  searchCar();
  searcharea.value="";

})