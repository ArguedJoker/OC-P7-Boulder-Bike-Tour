import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return ( 
            <div >
                <p>{ new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
            </div>
        )
    }
}

