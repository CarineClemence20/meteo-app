// stage 3 define the search function that uses api response
function searchCity(city) {
  let apiKey = "d2ebcoe34b6t502be4f636aa01ddf51f";
}

// stage 2 call dispaly the city bt calling the search city function that uses api
function displayWeatherInfo(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInputElement.value;
}
// stage 1 adding an event listener to form that diaplays the weather info in general
let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", displayWeatherInfo);
