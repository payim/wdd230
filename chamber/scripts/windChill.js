// get the temperature from the html weather div
const tempNumber = parseFloat(document.getElementById("temp").textContent);

//get the wind speed
const speedNumber = parseFloat(document.getElementById("speed").textContent);

//calculate the windchill
let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + 
                (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//check the wind chill
if (tempNumber <=50 && speedNumber > 3 ){
    document.getElementById("chill").textContent = windchill;
}else{
    document.getElementById("chill").textContent = "N/A";
}


