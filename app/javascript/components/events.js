import React, { Component } from 'react';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {event: {}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleChange(e) {
      this.setState({
        value: e.target.value
      });
  }

  handleSubmit(e) {
    let event = this.state.event;
    quest.post("/events",{ event: event}).then((res) => {console.log(res)
    });
  }

  handleNameChange(e) {
    let event = this.state.event;
    event.name = e.target.value;
    this.setState({event: event});
  }

  handleNameEmail(e) {
    let event = this.state.event;
    event.email = e.target.value;
    this.setState({event: event});
  }




render() {
    return (

    <React.Fragment>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-two-thirds has-text-left">
              <h1 className="title is-1">Slogan Event</h1>
              <p className="is-size-4">We need your help: We need a slogan! Get your creative caps on! Winner will also receive Boulder Bike Race Merchandise! All participants will receive discount coupons for our store sent to their email.</p>
            </div>
              
            <div className="column is-one-third has-text-left">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input is-medium" placeholder="Joe Bloggs" type="text" value={this.state.event.name} onChange={this.handleNameChange}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input is-medium" placeholder="youremail@example.com" type="text" value={this.state.event.email} onChange={this.handleEmailChange}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Slogan</label>
                  <div className="control">
                    <textarea className="textarea is-medium" maxLength="50" placeholder="Your Slogan goes here" value={this.state.value} onChange={this.handleChange}></textarea>
                  </div>
                </div>
                <div className="control">
                  <button type="submit" value="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
    </React.Fragment>

    );
  }
}
    

export default Events; 