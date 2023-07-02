//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=879431&appid=7960bee4048226cfe4a975f0eb320344&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {


    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
  document.getElementById('place').innerHTML = weatherInfo.name;  
  document.getElementById('temp').innerHTML = Math.round(weatherInfo.main.temp); 
  document.getElementById('speed').innerHTML = weatherInfo.wind.speed; 
  const captionDesc = document.querySelector('figcaption');

  const iconcode = weatherInfo.weather[0].icon;
  const icon_path = "//openweathermap.org/img/w/" +iconcode + ".png";
  console.log(icon_path);

  const desc = weatherInfo.weather[0].description;
  const firstsub = desc.substring(0, desc.indexOf(' '));
  const firstSubUpper  = firstsub.charAt(0).toUpperCase() + firstsub.slice(1);
  const secsub = desc.substring(desc.indexOf(' ') + 1);
  const secSubUpper  = secsub.charAt(0).toUpperCase() + secsub.slice(1);
  const combined = `${firstSubUpper} ${secSubUpper}`;
  captionDesc.textContent = combined;

  document.getElementById('weather_icon').src = icon_path; 

 }); //end of "then" fat arrow function
