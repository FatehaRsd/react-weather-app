import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [temperature, setTemperature] = useState(null);
  let [description, setDesription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeather(response) {
    setTemperature(response.data.temperature.current);
    setWind(response.data.wind.speed);
    setHumidity(response.data.temperature.humidity);
    setIcon(response.data.condition.icon_url);
    setDesription(response.data.condition.description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "909ft9b4ed56801561bb3a80d18954oa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Weather">
      <div className="Header">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9 mt-1">
              <input
                type="search"
                placeholder="Enter your place"
                required
                className="search-form-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-sm-3 mt-1">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <h1 className="current-city">{city}</h1>
          <p>
            Wednesday, 17:52,{" "}
            <span className="current-condition">{description}</span>
          </p>
          <p>
            Humidity: <strong>{humidity}%</strong>, Wind Speed:{" "}
            <strong>{wind}km/H</strong>
          </p>
        </div>
        <div className="col-6">
          <h1 className="current-temp">
            <img src={icon} alt="temp-icon"></img>
            {Math.round(temperature)}
            <span className="unit">°C</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
