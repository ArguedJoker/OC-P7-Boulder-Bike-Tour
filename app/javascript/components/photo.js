import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return(
            <React.Fragment>
                <section className="photo-section--1">
                    <div className="container">
                        <div className="content is-large">
                            <h1 className="title">Boulder Tour Gallery</h1>
                            <br/>
                            <p className="subtitle">Here are some of the pictures that have been taken at previous Bike Tours in Colorado.</p>
                        </div>

                        <div className="columns">

                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src="https://unsplash.it/300/200/?random&pic=1" alt=""></img>
                                        </figure>
                                        <div className="card-content is-overlay is-clipped">
                                            <span className="tag is-info">
                                            Photo Title
                                            </span>       
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src="https://unsplash.it/300/200/?random&pic=2" alt=""></img>
                                        </figure>
                                        <div className="card-content is-overlay is-clipped">
                                            <span className="tag is-info">
                                                Photo Title
                                            </span>       
                                        </div>
                                    </div>                              
                                </div>
                            </div>  

                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src="https://unsplash.it/300/200/?random&pic=3" alt=""></img>
                                        </figure>
                                        <div className="card-content is-overlay is-clipped">
                                            <span className="tag is-info">
                                            Photo Title
                                            </span>       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="columns">
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src="https://unsplash.it/300/200/?random&pic=4" alt=""></img>
                                        </figure>
                                        <div className="card-content is-overlay is-clipped">
                                            <span className="tag is-info">
                                            Photo Title
                                            </span>       
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src="https://unsplash.it/300/200/?random&pic=5" alt=""></img>
                                        </figure>
                                        <div className="card-content is-overlay is-clipped">
                                            <span className="tag is-info">
                                            Photo Title
                                            </span>       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-1by1">
                                            <img src="https://unsplash.it/300/200/?random&pic=6" alt=""></img>
                                        </figure>
                                        <div className="card-content is-overlay is-clipped">
                                            <span className="tag is-info">
                                            Photo Title
                                            </span>       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
        
    }
}

export default Photo; 