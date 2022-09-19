const form = document.querySelector('#bgm');

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let direction = document.querySelectorAll('input[name="direction"]');
let text = document.querySelector('p');

const Gradient = (event) => {
  event.preventDefault();
  let selectedValue;

  for (const sel of direction){
    if (sel.checked) {
      selectedValue = sel.value;

      console.log(selectedValue);
    }
  }

  let colorgradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
  console.log(colorgradient);

  document.body.style.backgroundImage = colorgradient;
  text.textContent = colorgradient + ';';
};

form.addEventListener('change', Gradient);

