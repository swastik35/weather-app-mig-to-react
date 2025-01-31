import React from "react";

const Icons = (props) => {
  if (props.iconList == "Clear") {
    return (
      <img src={require("../weather_icons/sun.png")} className="weatherIcon" />
    );
  }
  if (props.iconList == "Haze") {
    return (
      <img src={require("../weather_icons/haze.png")} className="weatherIcon" />
    );
  }
  if (props.iconList == "Clouds") {
    return (
      <img
        src={require("../weather_icons/cloudy.png")}
        className="weatherIcon"
      />
    );
  }
  if (props.iconList == "Rain") {
    return (
      <img
        src={require("../weather_icons/rainy.png")}
        className="weatherIcon"
      />
    );
  }
  if (props.iconList == "Sunny") {
    return (
      <img src={require("../weather_icons/sun.png")} className="weatherIcon" />
    );
  }
  if (props.iconList == "Fog"|props.iconList == "Mist") {
    return (
      <img src={require("../weather_icons/fog.png")} className="weatherIcon" />
    );
  }
};
export default Icons;
