import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  


  let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="02d" size={36}/>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">89°</span>
            <span className="WeatherForecast-temperature-min">82°</span>
          </div>
        </div>
      </div>
    </div>
  );
}