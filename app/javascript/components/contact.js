import React, { Component } from 'react';

class Contact extends Component {
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
                                    <option>Feedback</option>
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