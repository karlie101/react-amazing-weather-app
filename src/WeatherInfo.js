import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}
          </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
              </div>
             
              <div className="float-left">
                <WeatherTemperature fahrenheit={props.data.temperature} />
              </div>     
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:<span className="conditionInfo"> {props.data.humidity} %</span></li>
              <li>Wind:<span className="conditionInfo"> {props.data.wind} mph</span></li>
            </ul>
          </div>
        </div>

      </div>
      
       
    );
}