const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
yearElement.textContent = currentYear;

const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.getElementById("lastmodified");
lastModifiedElement.textContent = lastModifiedDate;


const calculateWindChill = (tempF, windSpeedMph) => 
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);


tempF = parseFloat(document.getElementById("tempF").textContent);
const windSpeedMph = parseFloat(document.getElementById("windspeed").textContent);
console.log(`Temperature: ${tempF} °F, Wind Speed: ${windSpeedMph} mph`);

if (tempF <= 50 && windSpeedMph > 3) {
    const windChill = calculateWindChill(tempF, windSpeedMph);
    document.getElementById("windchill").textContent = `${windChill.toFixed(1)}°F`;
    

}else {
    document.getElementById("windchill").textContent = "N/A";
}

