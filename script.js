function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (inputTemperature * 9/5) + 32;
        document.getElementById('result').innerText = `${inputTemperature} Celsius is equal to ${result.toFixed(2)} Fahrenheit.`;
    } else if (unit === 'fahrenheit') {
        result = (inputTemperature - 32) * 5/9;
        document.getElementById('result').innerText = `${inputTemperature} Fahrenheit is equal to ${result.toFixed(2)} Celsius.`;
    } else {
        document.getElementById('result').innerText = 'Invalid unit. Please select Celsius or Fahrenheit.';
    }
}
