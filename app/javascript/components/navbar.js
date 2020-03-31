import React, { Component } from 'react';
import { NavLink, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Location from './location';
import Contact from './contact';
import Photo from './photo';
import Riders from './riders';
import About from './about';
import Home from './Home/Home';

class Navbar extends Component {
    render() {
        return(
            <BrowserRouter>
                    <div className="has-navbar-fixed-top">
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
                                        <div className="navbar-menu column-right navigation" id="navMenu">
                                            
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="./Home" className="navbar-item">
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="./About" className = "navbar-item" >
                                                        About
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="./Riders" className = "navbar-item" >
                                                        Riders
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="./Photo" className = "navbar-item" >
                                                        Gallery
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName = "selected"
                                                    to="./Location" className = "navbar-item" >
                                                        Location
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink exact activeClassName="selected" to="./Contact" className = "navbar-item" >
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
                    <Route path="photo" component={ Photo } />
                    <Route path="location" component={ Location } />
                    <Route path="contact" component={ Contact } />
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Navbar;