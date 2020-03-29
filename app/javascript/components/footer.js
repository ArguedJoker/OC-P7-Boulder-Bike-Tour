import React, { Component } from 'react';
import '../../assets/stylesheets/home.scss';

export default class Footer extends Component {
    render() {
        return ( 
            <div className="footer">
                <p>Copyright &copy; Boulder Bike Tour Ltd { new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
                <p>Website created by Rohan Chauhan - Fullstack Developer</p>
            </div>
        )
    }
}

