import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';
import Home from '../components/Home/Home';
import About from '../components/about';
import Riders from '../components/riders';
import Photos from '../components/photo';
import Location from '../components/location';
import Contest from '../components/contest';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </div>
      <Navbar />
      <Home />
      <About />
      <Riders />
      <Photos />
      <Location />
      <Contest />
    </React.Fragment>,
    
    document.body.appendChild(document.createElement('div')
  ))
})