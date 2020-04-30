import React, { Component } from 'react';
 api-fe/be
import { NavLink, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Location from './location';
import Contact from './contact';
import Photo from './photo';
import Riders from './riders';
import About from './about';
import Home from './Home/Home';
import Events from './events';
 master

class Navbar extends Component {
    render() {
        return(
 api-fe/be
            <BrowserRouter>
                    <div className="has-navbar-fixed-top">
                        <div className="container is-fluid">
                            <div className="level">
                                <nav className="navbar is-fixed-top message-header">
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
                                        <div className="navbar-menu column-right navigation" id="navMenu">
                                            
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="/home" className="navbar-item">
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="/events" className="navbar-item">
                                                        Events
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="/about" className = "navbar-item" >
                                                        About
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="/riders" className = "navbar-item" >
                                                        Riders
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="/photo" className = "navbar-item" >
                                                        Gallery
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName = "selected"
                                                    to="/location" className = "navbar-item" >
                                                        Location
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="/contact" className = "navbar-item" >
                                                        Contact Us
                                                    </NavLink>  
                                                </li>
                                        </div>
                                    </div>
                                </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                <Switch>
                    <Redirect exact from="/" to= "home" />

                    <Route path="/home" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/riders" component={ Riders } />
                    <Route path="/photo" component={ Photo } />
                    <Route path="/location" component={ Location } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/events" component={ Events } />
                </Switch>

            </BrowserRouter>
=======
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
master
        )
    }
}

export default Navbar;