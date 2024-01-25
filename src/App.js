import React from "react";
import "./App.css";
import Footer from "./component/footer";
import Weather from "./component/weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Malaysia" />
      </div>
      <Footer />
    </div>
  );
}
