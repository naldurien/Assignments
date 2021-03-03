const zipTextBox = document.getElementById("zipTextBox")
// Not currently using geolocation search that uses this button
// const btnGetWeather = document.getElementById("btnGetWeather")
const btnSubmittedLocation = document.getElementById("btnSubmittedLocation")
const weatherContainer = document.getElementById("weatherContainer")

function kelvinToFahrenheit(temp) {
    let fahrenheit = 9/5*(temp-273)+32
    return Math.floor(fahrenheit)
}


function displayWeather(result) {
    const weather = `<div class="weather">
    <br>
    <u>Today's Weather for ${result.name}:</u>
    <p>Current Temp: ${kelvinToFahrenheit(result.main.temp)}°F</p>
    <p>Today's High: ${kelvinToFahrenheit(result.main.temp_max)}°F</p>
    <p>Today's Low: ${kelvinToFahrenheit(result.main.temp_min)}°F</p>
    <p>Barometric Pressure: ${result.main.pressure} mbar</p>
    <br>
    </div>
    ` 
    weatherContainer.innerHTML = weather
    zipTextBox.value = ""
}


btnSubmittedLocation.addEventListener("click", function() {
    event.preventDefault()
    const zip = zipTextBox.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=e9b850f32e29330be12e3698eeed5a05`)
    .then(response => {
        return response.json()
    }).then(result => {
        displayWeather(result)        
    })
  })
