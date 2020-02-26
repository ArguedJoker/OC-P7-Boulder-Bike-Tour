import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div>
                <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div className="navbar-menu" id="navMenu">
                    <a href="../components/Home/Home.js" className="navbar-item">
                        Home
                    </a>
                    <a href="../components/about.js" className="navbar-item">
                        About
                    </a>
                    <a href="../components/riders.js" className="navbar-item">
                        Riders
                    </a>
                    <a href="../components/photo.js" className="navbar-item">
                        Gallery
                    </a>
                    <a href="../components/location.js" className="navbar-item">
                        Location
                    </a>
                    <a href="../components/contest.js" className="navbar-item">
                        Contest
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;