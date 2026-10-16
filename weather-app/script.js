const API_KEY = "b8a77b6185da647890bc3d899bdf036f";

const cityInput = document.querySelector(".city-input");
const searchIcon = document.querySelector(".search-icon");

async function checkWeather() {
    const city = cityInput.value.trim();
    console.log("City entered:", city);

    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${API_KEY}&units=metric`;
    console.log("Request URL:", BASE_URL);

    try {
        
        const response = await fetch(BASE_URL);
        const data = await response.json();

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(data);
        displayWeather(data);
    }
    catch(error) {
        console.error("Request failed:", error);
        alert("Failed to Fetch Weather!");
    }
}

function displayWeather(data) {
    const temp = document.querySelector(".temp");
    const city = document.querySelector(".city");
    const humidity = document.querySelector(".humidity-details");
    const windSpeed = document.querySelector(".wind-details");
    const weatherIcon = document.querySelector(".weather-icon img");

    temp.innerHTML = Math.round(data.main.temp) + "°c";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h";

    const weather = data.weather[0].main;
    if(weather == "Clouds") {
        weatherIcon.src = "./assets/images/clouds.png";
    } else if (weather == "Clear") {
        weatherIcon.src = "./assets/images/clear.png";
    } else if (weather == "Drizzle") {
        weatherIcon.src = "./assets/images/drizzle.png";
    } else if (weather == "Mist") {
        weatherIcon.src = "./assets/images/mist.png";
    } else if (weather == "Rain") {
        weatherIcon.src = "./assets/images/rain.png";
    } else if (weather == "Snow") {
        weatherIcon.src = "./assets/images/snow.png";
    } else {
        weatherIcon.src = "./assets/images/clear.png";
    }
}

searchIcon.addEventListener("click", checkWeather);
