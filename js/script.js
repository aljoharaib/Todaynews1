let weather = {
  apikey: "76c613b5f47f4129b91a884ef5caebfe",
  fetchWeather: function (city) {
    fetch(
      "https://api.weatherbit.io/v2.0/current?city=" +
        city +
        "&units=metric&key=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data.data[0]));
  },
  displayWeather: function (data) {
    console.log(data);
    let name = data.city_name;
    let { icon, description } = data.weather;
    let { temp } = data;
    let speed = data.wind_spd;
    console.log(name, icon, description, temp, speed);
    document.querySelector(".city").innerText = "weather in" + name;
    document.querySelector(
      ".icon"
    ).src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
weather.fetchWeather("riyadh");
