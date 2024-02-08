import React from "react";

export default function WeatherTemperature(props) {
  function fahrenheit() {
    return (props.temperatureCelsius * 9) / 5 + 32;
  }
  if (props.unit === "metric") {
    return (
      <div className="WeatherTemperature">
        {Math.round(props.temperatureCelsius)}°C
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">{Math.round(fahrenheit())}°F</div>
    );
  }
}
