import React from 'react';
import logo from './logo.svg';

import './App.css';
import Navbar from './Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        &nbsp; and save to sdfdsf.
      </p>
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

export default App;
