let weather ={
    "apikey":"76c613b5f47f4129b91a884ef5caebfe",
    fetchWeather: function(city) {
        fetch("https://api.weatherbit.io/v2.0/current?city="
        +city
        +"&units=metric&key="
        +this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
const  {name} = data;
const  {icon , description} = data.weather[0];
const {temp , humidity} = data.main;
const {speed}= data.wind;
console.log(name,icon,description,temp,humidity,speed);
document.querySelector(".city").innerText ="weather in"+name;
document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
document.querySelector(".description").innerText=description;
document.querySelector(".temp").innerText=temp+"°C";
document.querySelector(".humidity").innerText="Humidity:" +humidity+ "%";
document.querySelector(".speed").innerText="Wind speed:"+speed+"km/h";


    }
};
