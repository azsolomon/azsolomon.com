import React, { Component } from 'react';
import pic from './photo.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} alt="pic" className="pic" />
          <h1>
            Andrew Solomon
          </h1>
          <div className='icon-row'>
              <a
                className="App-link"
                href="https://github.com/azsolomon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className='icon' size={40} />
              </a>
              <a
                className="App-link"
                href="https://www.linkedin.com/in/andrewzsolomon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className='icon' size={40} />
              </a>
              <a
                className="App-link"
                href="mailto:andrewzsolomon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className='icon'size={40} />
              </a>
              <a
                className="App-link"
                href="https://www.instagram.com/andrew__solomon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className='icon' size={40} />
              </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
