import React, { Component } from 'react';

import { Jumbotron } from './Jumbotron';
import About from '../about';
import Navbar from '../navbar';
import Photo from '../photo';
import Riders from '../riders';
import Location from '../location';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <Jumbotron/>
                <About/>
                <Photo/>
                <Riders/>
                <Location/>

            </div>
        )   
    }
}

export default Home; 

/*  
- Jumbotron with slideshow of 3 pictures linking to contest page (slogan), Riders info (Rider page) and Blog Page.

- Count Down Timer - showing time until 1st April

- Log in? Maybe for email or this could be a part of the slogan form where an option for newsletters can be sent. (FUTURE WORK)

*/