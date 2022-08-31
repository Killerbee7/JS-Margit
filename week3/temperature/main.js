const tempConverter = (id, val) => {
    val = parseFloat(val);
  
    const inputFahrenheit = document.querySelector('#inputFahrenheit');
    const inputCelsius = document.querySelector('#inputCelsius');
    const inputKelvin = document.querySelector('#inputKelvin');
  
    if (id == 'inputFahrenheit') {
      inputCelsius.value = ((val - 32) / 1.8).toFixed(2);
      inputKelvin.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (id == 'inputCelsius') {
      inputFahrenheit.value = (val * 1.8 + 32).toFixed(2);
      inputKelvin.value = (val + 273.15).toFixed(2);
    }
    if (id == 'inputKelvin') {
      inputFahrenheit.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
      inputCelsius.value = (val - 273.15).toFixed(2);
    }
  };