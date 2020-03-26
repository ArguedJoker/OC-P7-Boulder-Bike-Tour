import React from 'react';

const Jumbotron = () => {
    return (
      <React.Fragment>

        <section className="home-section--1">
          <div className="hero">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered level">
                  <div className="column level-left">
                    <h1 className="title">Boulder Bike Tour</h1>
                    <p className="subtitle">
                      We need YOUR help! We need a slogan!
                    </p>
                    <a href="#" className="button is-danger">
                      I have an idea
                    </a>
                  </div>
                  <div className="column level-right">
                    <img className="jumbotron--picture"
                      src = {
                        require("../../../assets/images/about.jpg")
                      }
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export { Jumbotron };