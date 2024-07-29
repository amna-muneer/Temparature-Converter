
function convertTemperature(temp, fromUnit, toUnit) {
  let result;
  if (fromUnit === toUnit) {
    return temp; 
  }
  switch (fromUnit) {
    case 'celsius':
      if (toUnit === 'fahrenheit') {
        result = (temp * 9 / 5) + 32;
      } else { 
        result = temp + 273.15;
      }
      break;
    case 'fahrenheit':
      if (toUnit === 'celsius') {
        result = (temp - 32) * 5 / 9;
      } else { 
        result = (temp - 32) * 5 / 9 + 273.15;
      }
      break;
    case 'kelvin':
      if (toUnit === 'celsius') {
        result = temp - 273.15;
      } else { 
        result = (temp - 273.15) * 9 / 5 + 32;
      }
      break;
    default:
      result = NaN;
  }
  return result;
}


document.getElementById('tempConverterForm').addEventListener('submit', function(event) {
  event.preventDefault();

 
  const temperature = parseFloat(document.getElementById('temperatureInput').value);
  const fromUnit = document.getElementById('unitSelect').value;
  const toUnit = document.getElementById('toUnitSelect').value;

 
  if (isNaN(temperature)) {
    alert('Please enter a valid number for temperature.');
    return;
  }


  const result = convertTemperature(temperature, fromUnit, toUnit);

  
  document.getElementById('resultOutput').innerHTML = `
    <p>${temperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}.</p>
  `;

  document.getElementById('resultCard').classList.remove('d-none');
});