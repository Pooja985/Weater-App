const apiKey = "f53dcde7a0a95354ad50de0b867fc251";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name === undefined ? "City not found" : data.name;
  document.querySelector(".temp").innerHTML = data.name === undefined ? '--°c': Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML =  data.name === undefined ? '--%': data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.name === undefined ? '--km/h': data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.src = "images/Smoke.png";
  }
}

function handleSearch() {
  var city = searchBox.value;
  if (city == "" || city == null) {
    city="New York";
  }
  checkweather(city);
}

searchBtn.addEventListener("click", handleSearch);

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

window.onload = function() {
  handleSearch();
}
