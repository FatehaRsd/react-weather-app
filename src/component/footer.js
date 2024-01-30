import React from "react";
import "./footer.css";

export default function Footer() {
  return (
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
            href="https://github.com/FatehaRsd/WeatherSearch"
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
  );
}
