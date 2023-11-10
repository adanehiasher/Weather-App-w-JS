const apiKey = "a620a9f507f71d99b97ef18e97184dac";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather (){
    const response = await fetch (apiUrl + `&appid=${apiKey}`);;
    var data = await response.json();
    
    //Update the innerHTML from Api Data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".city").innerHTML = data.name;
}

checkWeather();
