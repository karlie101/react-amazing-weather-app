import React from "react";
import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
               /> 
              </div> 
              <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
        </form>
        <h1>Miami</h1>
        <ul>
            <li>Friday 02:00</li>
            <li>Scattered thunderstorms</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
                <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
                     alt="Scattered thunderstorms"
                     className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">82</span>
                  <span className="unit">°F</span> 
                </div>  
              </div>    
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 36%</li>
                    <li>Humidity: 85%</li>
                    <li>Wind: 9 mph</li>
                </ul>
            </div>
        </div>
    </div>
        );
}