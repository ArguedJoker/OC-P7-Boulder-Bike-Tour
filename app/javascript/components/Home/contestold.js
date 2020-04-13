import React, { Component } from 'react';
import moment from 'moment'
// import './counter_overlay.css';
import './ContestCounter.css';

import { Link } from 'react-router-dom';

export default class ContestCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contestDate: moment("2020-04-01"),
            nowDate: moment(),
            milsecondsTillTheRace: 0,           
    };

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({nowDate: moment()});
        // this.secondsDiff = this.state.contestDate
        // .diff(this.state.nowDate, 'seconds');  
        // this.setState({secondsTilTheRace: this.secondsDiff});
        this.setState({milsecondsTillTheRace:
            this.state.contestDate.diff(this.state.nowDate)
    })
    }

 

    render() {
        
        return (

<div className="container">
  
 
  
  <div className="row">

    <div className="col">
      <div className="card bg-cool text-light">
        <div className="bg-gr">
        <div className="card-body">
          <div className="columns is-centered">
              <div className="display-1 column">
                <span>{moment.duration(this.state.milsecondsTillTheRace).months()}</span> <span className="lead ">Months</span>
              </div>
              <div className="display-1 column">
                <span>{moment.duration(this.state.milsecondsTillTheRace).days()}</span> <span className="lead ">Days</span>
              </div>
              <div className="display-1 column">
                <span>{moment.duration(this.state.milsecondsTillTheRace).hours()}</span> <span className="lead ">Hours</span>
              </div>
              <div className="display-1 column">
                <span>{moment.duration(this.state.milsecondsTillTheRace).minutes()}</span> <span className="lead  ">Minutes</span>
              </div>
              <div className="display-1 text-primary column">
                <span>{moment.duration(this.state.milsecondsTillTheRace).seconds()}</span>  <span className="lead ">Seconds</span>
              </div>
              <div className="column">
                <Link to="/location" className="button is-danger">
                  Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>









        );
    }
}
