let input = document.querySelector("input");
let search = document.querySelector("button");
let city = document.querySelector("h2");
let temp = document.querySelectorAll("h3")[0];
let climate = document.querySelectorAll("h3")[1];
let output = document.querySelector("#output")


console.log(input,search,city, temp , climate);
console.log(input.value);

search.addEventListener("click" , async () => {
    try{
    let apiKey = `a0bb6408b92a827741b559c5d608a1fe`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    let dataFromInternet = await fetch(api);
    let weatherData = await dataFromInternet.json();
    city.innerHTML = `City Name: ${weatherData.name}`;
    temp.innerHTML = `Temp: ${Math.floor(weatherData.main.temp - 273)}`;
    climate.innerHTML = `Climate: ${weatherData.weather[0].main}`;


    console.log(dataFromInternet);
    console.log(weatherData);
    } catch(e){
        console.log(e);
        output.innerHTML = "invalid city name";
    }
});