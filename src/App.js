import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Five Day Forecast</h1>
        </header>

        <p className="App-intro"></p>
        <Form/>

        <Footer/>

      </div>
    );
  }
}

export default App;
