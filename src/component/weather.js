import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./currentDate.js";
import WeatherIcon from "./weatherIcon.js";
import WeatherTemperature from "./weatherTemp.js";
import "./weather.css";

function Weather(props) {
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({
    ready: false,
    city: props.defaultCity,
  });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "a731f132a2290c7616a76c145019b30b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function updateCelsiusUnit(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function updateFahrUnit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-info">
          <div className="search-engine">
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col-sm-9">
                  <input
                    className="search-form-input"
                    type="search"
                    placeholder="Enter your place ..."
                    onChange={updateCity}
                    autoFocus="on"
                    required
                  ></input>
                </div>
                <div className="col-sm-3 ">
                  <input
                    className="search-button"
                    type="submit"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="weather-display">
            <div className="row">
              <div className="col-sm-6">
                <div className="location">
                  <h1>{weatherData.city}</h1>
                </div>

                <div className="date-info">
                  <CurrentDate date={weatherData.date} />
                </div>
                <div className="weather-description">
                  {weatherData.description}
                </div>

                <div className="weather-highlights">
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <div className="highlights-header">
                        Humidity : <strong>{weatherData.humidity} %</strong>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="highlights-header">
                        Wind : <strong>{weatherData.wind} km/h</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="temperature">
                  <div className="row">
                    <WeatherIcon
                      iconId={weatherData.icon}
                      width={100}
                      height={100}
                    />
                    <WeatherTemperature
                      temperatureCelsius={weatherData.temperature}
                      unit={unit}
                    />
                    <div className="temperature-units">
                      <button onClick={updateCelsiusUnit}>°C</button>|
                      <button onClick={updateFahrUnit}>°F</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <WeatherForecast coordinates={weatherData.coordinates} unit={unit} /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
