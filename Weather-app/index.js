
let apiKey = "6a4d8fab84016109ce8c62ab12cda6c5";



function getweather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("cityname").innerHTML = data.name;
            document.getElementById("temp").innerHTML = data.main.temp + "°C";
            document.getElementById("tempmin").innerHTML = "min." + data.main.temp_min + "°C";
            document.getElementById("tempmax").innerHTML = "max." +data.main.temp_max + "°C";
            document.getElementById("weather").innerHTML = data.weather[0].description;

            let icon = data.weather[0].icon;

            document.getElementById("icon").innerHTML = "<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>";
        }
        )
        .catch(error => console.log(error));
}
let search = document.getElementById("search");
let city = document.getElementById("city");
search.addEventListener("click", function (e) {
    getweather(city.value);
    e.preventDefault();
}
);