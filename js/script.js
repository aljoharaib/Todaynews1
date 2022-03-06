let weather ={
    "apikey":"76c613b5f47f4129b91a884ef5caebfe",
    fetchWeather: function(city) {
        fetch("https://api.weatherbit.io/v2.0/current?city="
        +city
        +"&units=metric&key="
        +this.apikey
        )
        .then((response) => response.json()).
        then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
const  {name} = data;
const  {icon , description} = data.Weather[0];
const {temp , humidity} = data.main;
const {speed}= data.wind;
console.log(name,icon,description,temp,humidity,speed);
document.querySelector("city").innerText = "Weather in" +name;
    }
};
