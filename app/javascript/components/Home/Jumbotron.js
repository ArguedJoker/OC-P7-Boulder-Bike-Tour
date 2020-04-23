import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ContestCounter from './contestold';

const Jumbotron = () => {
    return (
      <React.Fragment>
        <section className="home-section--1">
          <div className="hero">
            <div className="hero-body">
              <div className="container">
                
                <div className="columns is-multiline is-vcentered level JumboContent">
                  <div className="column level is-full">
                    <h1 className="title">Boulder Bike Tour</h1>
                    <p className="subtitle">
                      We need YOUR help! We need a slogan!
                    </p>
                    <Link to="/events" className="button is-danger">
                      I have an idea
                    </Link>
                  </div>
                  <div className="column is-one-quarter"></div>
                  <div className="column is-one-quarter"></div>
                  <div className="column is-one-quarter"></div>
                  <div className="column"></div>
                  <div className="ContestCounter is-centered column level-left is-half">
                    <ContestCounter />
                  </div>
                  <div className="column level-right is-half">
                    <img
                      className="jumbotron--picture"
                      src={require("../../../assets/images/about.jpg")}
                    ></img>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <Switch>
          <Route path="/event" component={Event} />
        </Switch>
      </React.Fragment>
    );
}

export { Jumbotron };