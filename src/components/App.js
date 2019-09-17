import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const APIKey = '420432feaa8992c2ed926a6162d52cc5'

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState(state => ({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        }))
      })
      .catch(err => {
        console.log(err)
        this.setState(state => ({
          err: true,
          city: this.state.value
        }))
      })
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
