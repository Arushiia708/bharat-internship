document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const inputTemperature = document.getElementById("inputTemperature");
    const inputUnit = document.getElementById("inputUnit");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(inputTemperature.value);
        const unit = inputUnit.value;

        if (isNaN(temperature)) {
            result.textContent = "Please enter a valid number.";
            return;
        }

        if (unit === "celsius") {
            const fahrenheit = (temperature * 9/5) + 32;
            result.textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5/9;
            result.textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
        }
    });
});

