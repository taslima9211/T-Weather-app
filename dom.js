
const key = "cb73871e4a57fe82e32d4c2e015b4f88";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const temp = document.querySelector(".h2-style")
const inputBox = document.getElementById("inputBox")
const searchBtn = document.getElementById("searchBtn")
const cityName= document.querySelector(".h2-style2")
const icon= document.querySelector(".weather-icon")

async function getData(city="habiganj"){
    const response = await fetch(url + city + `&appid=${key}`);
    const data = await response.json()
    temp.innerHTML= parseInt(data.main.temp) + "°c";
    cityName.innerHTML = data.name;


    if(data.weather[0].main == "Clear"){
        icon.src = "clear.png";
    }else if(data.weather[0].main == "Rain"){
        icon.src = "rain.png";
    }else if(data.weather[0].main == "Mist"){
        icon.src = "mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        icon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "snow.png";
    }
inputBox.value = " ";                                                                      
}

searchBtn.addEventListener("click" , function(){

    getData(inputBox.value)
})
getData();

document.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        getData(inputBox.value)
    }
})