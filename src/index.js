function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let apiKey = "ef52o34e3ba504ef31d19tf761dfb0e5";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
