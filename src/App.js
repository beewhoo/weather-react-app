import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Check your weather!</h1>
        </header>
        <p className="App-intro">
          Search by postal code.
        </p>
        
    <form>
      <label>
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Search" />
    </form>

      </div>
    );
  }
}

export default App;
