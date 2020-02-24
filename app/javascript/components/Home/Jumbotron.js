import React from 'react';

const Jumbotron = () => {
    return(
        <section className="home-section--1">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1>Boulder Bike Tour</h1>
                        <p>We need YOUR help! We need a slogan!</p>
                        <a href="#" className="button is-danger">I have an idea</a>
                    </div>
                    <div>
                        <img src="https://unsplash.com/photos/KpqneeL9Uz0"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Jumbotron };