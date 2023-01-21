// konversi suhu dari Celcius ke Fahrenheit dan sebaliknya

let celcius;
let fahrenheit;

// celcius ke fahrenheit
let celciusToFahrenheit = function(celcius) {
        fahrenheit = ((9 / 5) * celcius) + 32;
        document.getElementById("ctof").innerHTML = `${celcius} \u00B0C is ${fahrenheit.toFixed(2)} \u00B0F`;
        //console.log(`${celcius} \u00B0C is ${fahrenheit} \u00B0F`);
    }
    //celciusToFahrenheit(30);

// fahrenheit ke celcius
function fahrenheitToCelcius(fahrenheit) {
    celcius = (5 / 9) * (fahrenheit - 32);
    document.getElementById("ftoc").innerHTML = `${fahrenheit} \u00B0F is ${celcius.toFixed(2)} \u00B0C`;
    //console.log(`${celcius} \u00B0C is ${fahrenheit} \u00B0F`);
}
//fahrenheitToCelcius(50);