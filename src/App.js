import React from "react";
import "./App.css";

import Weather from "./component/weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Malaysia" />
      </div>
      <div className="footer">
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/FatehaRsd"
              target="_blank"
              rel="noreferrer"
            >
              FatehaRsd
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/FatehaRsd/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub
            </a>{" "}
            and
            <a
              href="https://vanilla-weathersearch.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

//  let apiKey = "909ft9b4ed56801561bb3a80d18954oa";
//  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
