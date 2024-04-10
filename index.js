const apikey = "70a55350ee2f091cde8b4e74c9fe47a3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
const searchbox=doment.querySelector(".search input")
const searchtn=doment.querySelector(".search button")
async function checkWeather(city){
const response = await fetch(apiUrl+ city +`&apikey=${apikey}`)
let data = await response.json();
console.log(data);

document.querySelector(".city").innerHTML = data.name 
document.querySelector(".temp").innerHTML =map.round (data.main.temp )+ "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"
}

searchtn.addEventListener("click", ()=>{
    checkWeather()
})
;