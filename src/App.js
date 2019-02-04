import React, { Component } from 'react';
import './App.css';
import { KEY } from './api-key'
import Weather from './components/Weather';
import Form from './components/Form';
import Title from './components/Title';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    conditions: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const city = e.target.city.value
    const country = e.target.country.value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${KEY}`

    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        conditions: data.weather[0].description
      }))
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form handleSubmit={this.handleSubmit} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          humidity={this.state.humidity}
          conditions={this.state.conditions}
        />
      </div>
    );
  }
}

export default App;
