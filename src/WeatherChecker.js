import React, { useState, useEffect } from "react";
import "./WeatherChecker.css";
import Display from "./Components/DispDetail";

const API =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=e9d3f837cdafd44bb50a8eef4449d85f";

const Weatherchecker = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const checkWeather = (city) => {
    console.log(`Checking weather for: ${city}`);

    fetch(`${API}&q=${city}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  const handleClick = () => {
    checkWeather(cityName);
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div>
      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="enter city name"
            className="citytext"
            value={cityName}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleClick();
              }
            }}
          />
          <button className="search_btn" onClick={handleClick}>
            <img src={require("./img/search_icon.png")} />
          </button>
        </div>
        <Display items={weatherData} />
      </div>
    </div>
  );
};

export default Weatherchecker;
