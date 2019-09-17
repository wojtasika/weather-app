import React from 'react';

const Result = props => {

  const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather
  return (
    <React.Fragment>
      <div>Pogoda dla: {city}</div>
      <div>Dzień/Godzina: {date}</div>
      <div>Temperatura: {temp}</div>
      <div>Wschód słońca: {sunrise}</div>
      <div>Zachód słońca: {sunset}</div>
      <div>Ciśnienie: {pressure}</div>
      <div>Siła wiatru: {wind}</div>
    </React.Fragment>
  );
}

export default Result;