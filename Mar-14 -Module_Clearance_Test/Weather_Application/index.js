let appId = "5451fbf89b60db0a9c0b6d9940b411e5";
let units = 'metric'
let searchMethod;

function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("clear.jpeg")';
            break
        case 'Clouds':
            document.body.style.backgroundImage = 'url("clouds.jpeg")';
            break;
        case 'Rain':
            document.body.style.backgroundImage = 'url("rain.jpeg")';
            break;
        case 'Drizzle':
            document.body.style.backgroundImage = 'url("drizzle.webp")';
            break;
        case 'Mist':
            document.body.style.backgroundImage = 'url("mist.jpeg")';
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("thunderstorm.webp")';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("snow.jpeg")';
            break;
        case 'Smoke':
            document.body.style.backgroundImage = 'url("smoke.jpeg")';
            break;
        case 'ClearSky':
            document.body.style.backgroundImage = 'url("clearly.webp")';
            break;
        default:
            document.body.style.backgroundImage = 'url("default.webp")';
            break;
    }

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0) + resultDescription.slice(1);

    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) +
        '&#8451';

    windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';

    setPositionForWeatherInfo();

}

function setPositionForWeatherInfo() {
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`;
    weatherContainer.style.visibility = 'visible';

}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchWeather(searchTerm);
})