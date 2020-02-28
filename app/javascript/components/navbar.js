import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <html className="has-navbar-fixed-top">
                <div className="container is-fluid">
                    <div className="level">
                        <nav className="navbar is-fixed-top">
                        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                        <div className="navbar-start">
                            <div className="navbar-item level-left logo">
                                <img src={require("../../assets/images/logo-title/logo.png")}></img>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="column is-centered level-right">
                                <div className="navbar-menu column-right" id="navMenu">
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
                                    <a href="../components/contact.js" className="navbar-item">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
            </html>
        )
    }
}

export default Navbar;