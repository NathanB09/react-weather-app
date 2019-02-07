import React from 'react';
import './Weather.css'

const Weather = ({ city, country, temp, humidity, conditions, error }) => {
  return (
    <div className='display'>
      {!city && error && <p className='error'>Not Found</p>}
      {city && <p><strong>Location:</strong> <span>{city}, {country}</span></p>}
      {temp && <p><strong>Temperature:</strong> <span>{temp} °C</span></p>}
      {humidity && <p><strong>Humidity:</strong> <span>{humidity} %</span></p>}
      {conditions && <p><strong>Conditions:</strong> <span>{conditions}</span></p>}
    </div>
  );
};

export default Weather;