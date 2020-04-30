import React, { Component } from 'react';

class Contact extends Component {
api-fe/be

  constructor(props) {
    super(props);
    this.state = {contact: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    let contact = this.state.contact;
    quest.post("/contact", {contact: contact}).then((res) => {
        console.log(res)
    })
  }
  
  handleNameChange(e) {
    let contact = this.state.contact;
    contact.name = e.target.value;
    this.setState({ contact: contact }); 
  }

  handleNameEmail(e) {
    let contact = this.state.contact;
    contact.email = e.target.value;
    this.setState({ contact: contact }); 
  }


  render() {
    return (
      
      <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-two-thirds has-text-left">
              <h1 className="title is-1">Contact Us</h1>
              <p className="is-size-4">Want more information about what we do?</p>
            </div>
            <div className="column is-one-third has-text-left">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input is-medium" placeholder="Joe Bloggs" type="text" value={this.state.contact.name} onChange={this.handleNameChange}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input is-medium" placeholder="youremail@example.com" type="text" value={this.state.contact.email} onChange={this.handleEmailChange}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea is-medium"placeholder="Your message here" value={this.state.value} onChange={this.handleChange}></textarea>
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
    );
  }
}

export default Contact;


    render() {
        return(
            <section className="contact-section--1">
                <div className="container">
                    <h1 className="title">Contact Us</h1>

                    <p className="subtitle">Have questions? Want to be a rider in the next Tour? Got some juicy feedback or want to help us with deciding the slogan for this years Tour? Hit us up down below: </p>

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>Feeback</option>
                                    <option>Slogan</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="question"/>
                                Yes
                            </label>
                            <label className="radio">
                                <input type="radio" name="question"/>
                                No
                            </label>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>    
            </section>
            
        )
    }
}

export default Contact;
 master
