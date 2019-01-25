import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppinList from './component/ShoppingList'
import App2 from './component/App2';
import App3 from './component/App3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ShoppinList name="Mark"/>
<App3 />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
