const apikey = "70a55350ee2f091cde8b4e74c9fe47a3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Nairobi ";
async function checkWeather(){
const response = await fetch(apiUrl+`&apikey=${apikey}`)
let data = await response.json();
console.log(data);

document.querySelector(".city").innerHTML = data.name 
document.querySelector(".temp").innerHTML = data.main.temp 
document.querySelector(".humidity").innerHTML = data.main.humidity
document.querySelector(".wind").innerHTML = data.wind.speed
}
checkWeather();