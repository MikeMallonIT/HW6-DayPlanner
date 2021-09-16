
var apiKey = '8ddd48929a37115dc77fee6865b3699e';

var cityName = 'Chicago';

var units = 'imperial';



//console.log(url);

function getCurrentWeather(cityName, units){

    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units='+units+'&appid=8ddd48929a37115dc77fee6865b3699e';

    fetch(url)
    .then(response => {
        return response.json();
    })

    .then(weather => {
        console.log("Whole thing ", weather);
        console.log("Current Temp " + weather.main.temp);
    })
}

getCurrentWeather(cityName, units);