var temp = document.querySelector("#temp");
var status = document.querySelector("#status");
var locat = document.querySelector("#location");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var latit = document.querySelector("#latit");
var long = document.querySelector("#long");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoords);
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}
function getCoords(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  var link = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b59f2b6e8322e621458fe6467f9c31db`;
  fetch(link)
    .then((d) => d.json())
    .then((data) => {
      temp.innerHTML = `${data.main.temp}&deg;C`;
      status.innerHTML = data.weather[0].main;
      locat.innerHTML = `<i class="fa fa-map-marker" aria-hidden="true"></i>${data.name}`;
      humidity.innerHTML = `Humidity : ${data.main.humidity}`;
      wind.innerHTML = `Wind : ${data.wind.speed} Km/h`;
      latit.innerHTML = `Latitude : ${data.coord.lat}`;
      long.innerHTML = `Longitude : ${data.coord.lon}`;
    });
}
getLocation();
