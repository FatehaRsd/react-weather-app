import React, { useState, useEffect } from "react";
import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDaily from "./weatherForecastDaily";

function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  useEffect(() => {
    setLoaded(false);
  }, [props.unit]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = "a731f132a2290c7616a76c145019b30b";
    let long = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let forecastApi = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(forecastApi).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h2>7-Days Forecast</h2>
        {forecastData.map(function (day, index) {
          if (index < 7) {
            return <WeatherForecastDaily key={index} data={day} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default WeatherForecast;
