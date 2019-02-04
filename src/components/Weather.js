import React from 'react';

const Weather = ({ city, country, temp, humidity, conditions }) => {
  return (
    <div>
      {city && <p>Location: {city}, {country}</p>}
      {temp && <p>Temperature: {temp} °C</p>}
      {humidity && <p>Humidity: {humidity} %</p>}
      {conditions && <p>Conditions: {conditions}</p>}
    </div>
  );
};

export default Weather;