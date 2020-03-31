import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';
import About from '../components/about';
import Riders from '../components/riders';
import Photos from '../components/photo';
import Location from '../components/location';
import Contact from '../components/contact';
import Footer from '../components/footer';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>

      < Navbar />
      

      < Footer />

    </React.Fragment>,

    document.getElementById("content")
    
  )
})