import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clound_icon from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";

const WeatherApp = () => {
  let api_key = "21f50cceab1e67c616e0c5e860d037a7";

  const search = async () => {
    let element = document.querySelector(".cityInput");
    console.log(element.value);
    if (!element.value) {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;
    let data = await fetch(url).then((res) => res.json());

    if (!data.main.temp) {
      return 0;
    }

    let temp = Math.floor(data.main.temp);
    let location = data.name;
    let humidity = data.main.humidity;
    let wind_speed = data.wind.speed;

    document.querySelector(".weather-temp").innerHTML = temp + "C";
    document.querySelector(".weather-location").innerHTML = location;
    document.querySelector(".humidity-percent").innerHTML = humidity + "%";
    document.querySelector(".wind-speed").innerHTML = wind_speed + "km/h";

    console.log(data);
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <img src={search_icon} alt="" onClick={search} />
        </div>
      </div>
      <div className="weather-img">
        <img src={clound_icon} alt="" />
      </div>
      <div className="weather-temp">24C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
