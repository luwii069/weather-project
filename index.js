const apikey = "70a55350ee2f091cde8b4e74c9fe47a3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
const searchbox=document.querySelector(".search input")
const searchtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
const response = await fetch(apiUrl+ city +`&apikey=${apikey}`)
let data = await response.json();
//console.log(data);

document.querySelector(".city").innerHTML = data.name 
document.querySelector(".temp").innerHTML =Math.round(data.main.temp )+ "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"
if(data.weather[0].main== "clouds"){
    weatherIcon.src="clouds.png"
}
else if(data.weather[0].main== "clear"){
    weatherIcon.src="clear.png"
}
else if(data.weather[0].main== "rain"){
    weatherIcon.src="rain.png"
}
else if (data.weather[0].main== "drizzle"){
    weatherIcon.src="drizzle.png"
}
else if (data.weather[0].main== "mist"){
    weatherIcon.src="mist.png"
}


}

searchtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value)
})
;