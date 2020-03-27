import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="about-section--1">
                <div className="container">
                    <div className="columns is-centered level">
                        <div className="column">
                            <img className="about--picture"
                            src={require("../../assets/images/jumbo.jpg")}>
                            </img>
                        </div>
                        <div className="column">
                            <h1 className="title">Why do we do what we do?</h1>
                            <br></br>
                            < p className = "subtitle" > Well why DON'T we? Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado at the foot of the Rocky Mountains. It'
                            s the Boulder Bike Tour, and it 's coming up in 2020! Now is your chance to view 20 bikers grueling it out across all kinds of terrain to be number one!</p>
                        </div>
                    </div>
                </div>
            </section>
        );
        
    }
}

export default About; 