// stage 4 defining update info function by using response fro the api

function updateInfo(response) {
  let temperatureValueElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  temperatureValueElement.innerHTML = Math.round(temperature);

  let cityNameElement = document.querySelector("#city-name");
  let city = response.data.city;
  cityNameElement.innerHTML = city;
}

// stage 3 define the search function that uses api response
function searchCity(city) {
  let apiKey = "d2ebcoe34b6t502be4f636aa01ddf51f";
  let weatherApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(weatherApiUrl).then(updateInfo);
}

// stage 2 call dispaly the city bt calling the search city function that uses api
function displayWeatherInfo(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  searchCity(searchInputElement.value);
}
// stage 1 adding an event listener to form that diaplays the weather info in general
let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", displayWeatherInfo);

//city that always run
searchCity("kicukiro");
