import React, { Component } from 'react';
import pic from './photo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} alt="pic" className="pic" />
          <p>
            Andrew Solomon
          </p>
          <a
            className="App-link"
            href="https://github.com/azsolomon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/andrewzsolomon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="App-link"
            href="mailto:andrewzsolomon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </header>
      </div>
    );
  }
}

export default App;
