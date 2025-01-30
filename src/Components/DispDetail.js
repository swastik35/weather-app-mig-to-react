import React, {} from "react";
import "../WeatherChecker.css";
import Icons from "./Icons";



const  Display=(props)=>{
  if (!props.items) {
    return <p></p>;
  }

  if (props.items.cod==404 | props.items.cod==400) {
    return <p>Please enter a valid city name</p>;
  }

const icon=props.items.weather[0].main;
console.log(icon)



  return(
    <div>
     
    <Icons iconList={icon}/>
    <h3 className="wethr">{Math.round(props.items.main.temp)+"°C"}</h3>
    <h1 className="temp"></h1>
    <h2 className="cityname">{props.items.name}</h2>
    <div className="details">
      <div className="col">
        <img src={require("../img/humidity.png")} />
        <div>
          <p className="humidity">{props.items.main.humidity+"%"}</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="col">
        <img src={require("../img/wind.png")} />
        <div>
          <p className="windspeed">{props.items.wind.speed+" km/h"}</p>
          <p>Wind speed</p>
        </div>
      </div>
    </div>
  </div>
    
    
 );

  
    
      
      
      
}
export default Display;