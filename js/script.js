const apiKey = "f051d2b41be474abf29ef63517cf95a9"

const cityInput = document.getElementById('city-input');
const SearchBtn = document.getElementById('search');

const cityElement = document.getElementById('city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const umidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');
const weatherContainer = document.querySelector("#weather-data")


// Funções

const getWeatherData = async(city) => {
    
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;

}


const showWeatherData = async (city) => {

    const data = await getWeatherData(city)

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`;
    weatherContainer.classList.remove("hide");

    dataString = `
City: ${data.name}
Temp: ${parseInt(data.main.temp)}°C
Clima: ${data.weather[0].description}
Úmidade: ${data.main.humidity}%
Vento: ${data.wind.speed}km/h`

    console.log(dataString);

}


// Eventos

SearchBtn.addEventListener("click", (e) => {
    
    e.preventDefault();

    const city = cityInput.value

    showWeatherData(city)

})