import React, { Component } from 'react';
import './App.css';
import { KEY } from '../api-key'
import Weather from './Weather';
import Form from './Form';
import Title from './Title';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    conditions: undefined,
    error: undefined
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const city = event.target.city.value
    const country = event.target.country.value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${KEY}`

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (data.name) {
          this.setState({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            humidity: data.main.humidity,
            conditions: data.weather[0].description
          })
        } else {
          this.setState({ error: 'Not Found' })
        }
      })
    event.target.reset()
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <Title />
            </div>
            <div className='col-8'>
              <Form handleSubmit={this.handleSubmit} />
              <Weather
                city={this.state.city}
                country={this.state.country}
                temp={this.state.temp}
                humidity={this.state.humidity}
                conditions={this.state.conditions}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
