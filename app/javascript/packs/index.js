import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';
import Home from '../components/Home/Home';
import About from '../components/about';
import Riders from '../components/riders';
import Photos from '../components/photo';
import Location from '../components/location';
import Contact from '../components/contact';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>

      <Navbar />
      <Home />
      <About />
      <Riders />
      <Photos />
      <Location />
      <Contact />

    </React.Fragment>,
    
    document.body.appendChild(document.createElement('div')
  ))
})