"use strict";

const searchButton = document.getElementById("searchButton");

function searchWeather() {
    const cityInput = document.getElementById("searchInput").value;
    const myAPI = "66066c727bc6bb9c11300e6472f8d46c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${myAPI}&units=metric`;
    const weatherImage = document.getElementById("weatherImg");
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        if (data.cod === 200) {
          const weatherInfo = {
            dataName: data.name,
            dataWeather: data.weather,
            dataMainTemp: data.main.temp,
            dataMainHumidity: data.main.humidity,
            dataWindSpeed: data.wind.speed,
          };
  
          document.getElementById(
            "weatherTemp"
          ).textContent = `${weatherInfo.dataMainTemp} °C`;
          document.getElementById("weatherCity").textContent =
            weatherInfo.dataName;
          document.getElementById(
            "humidty"
          ).textContent = `Nem: ${weatherInfo.dataMainHumidity}%`;
          document.getElementById(
            "windSpeed"
          ).textContent = `Rüzgar Hızı: ${weatherInfo.dataWindSpeed} m/s`;
          if (data.weather[0].main == "Rain") {
            weatherImage.src = "./images/rain.png";
          }
          if (data.weather[0].main == "Clear") {
            weatherImage.src = "./images/clear.png";
          }
          if (data.weather[0].main == "Clouds") {
            weatherImage.src = "./images/clouds.png";
          }
          if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "./images/drizzle.png";
          }
          if (data.weather[0].main == "Humidity") {
            weatherImage.src = "./images/humidity.png";
          }
          if (data.weather[0].main == "Mistr") {
            weatherImage.src = "./images/mist.png";
          }
          if (data.weather[0].main == "Snow") {
            weatherImage.src = "./images/snow.png";
          }
          if (data.weather[0].main == "Wind") {
            weatherImage.src = "./images/wind.png";
          }
        } else {
          // Hata mesajını gösterin
          document.getElementById("weatherCity").textContent =
            "Şehir bulunamadı.";
          document.getElementById("weatherTemp").textContent = ` `;
          document.getElementById("humidty").textContent = " ";
          document.getElementById("windSpeed").textContent = " ";
          weatherImage.src = " ";
        }
      })
      .catch((error) => console.error("Error:", error));
}

searchButton.addEventListener("click", searchWeather);

document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});
