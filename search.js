var temp = document.querySelector("#temp");
var status = document.querySelector("#status");
var locat = document.querySelector("#location");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var latit = document.querySelector("#latit");
var long = document.querySelector("#long");
var searchBtn = document.querySelector("#search");
var searchlocation = document.querySelector("#searchInput");
searchBtn.addEventListener("click", search);
function search() {
  var searched = searchlocation.value;
  console.log(searched);
  setweather(searched);
}

function setweather(searched) {
  let link = `http://api.openweathermap.org/data/2.5/weather?q=${searched}&units=metric&appid=b59f2b6e8322e621458fe6467f9c31db`;
  window.open("./index.html");
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
      console.log(data);

      
    });
}
