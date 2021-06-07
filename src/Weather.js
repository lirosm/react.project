import react from "react";

import axios from "axios";

export default function Weather(props) {

function handleResponse(response) {
 alert(`The weather in Oslo is ${response.data.main.temp}Celcius`);
}

let apiKey = "c898564bae75feba5b1af523cf4a1211";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
return(
    <h2>Hello from Weather</h2>
);
}

