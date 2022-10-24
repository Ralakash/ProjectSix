
var forcast;
var city = "Kalamazoo";
var openweathermapKey = "99f3a7e5c08aca58214a5ff5a0495fd1";
var countryCode = 840;
console.log("api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+openweathermapKey);

fetch("api.openweathermap.org/data/2.5/weather?q=London&appid=99f3a7e5c08aca58214a5ff5a0495fd1")
.then(res => res.json)
.then(res => console.log(res));