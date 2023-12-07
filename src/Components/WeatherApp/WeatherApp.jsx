import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clound_icon from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-icon">
        <img src={clound_icon} alt="" />
      </div>
      <div className="weather-temp">24C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="humidity-icon">
          <img src={humidity} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
