import React from "react";
import "./weatherForecast.css";
import WeatherIcons from "./weatherIcon";

function WeatherForecastDaily(props) {
  function minTemperature() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}°`;
  }

  function forecastDaily() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${days[day]}`;
  }

  return (
    <div className="WeatherForecastDaily">
      <div className="container m-1" id="forecast">
        <div className="dailyForecast">
          <div className="row">
            <div className="col-sm-4">
              <div className="forecastDate">{forecastDaily()}</div>
            </div>
            <div className="col-sm-8">
              <div className="forecastData">
                <div className="row">
                  <div className="col-sm-6">
                    <WeatherIcons
                      iconId={props.data.weather[0].icon}
                      weight={50}
                      height={50}
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="forecastTemp">
                      <strong className="minTemp">{minTemperature()}</strong> |{" "}
                      <strong className="maxTemp">{maxTemperature()}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastDaily;
