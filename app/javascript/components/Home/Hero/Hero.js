import React, { Component } from 'react'
import ButtonLinks from './ButtonLinks'


class Hero extends Component {
    render () {
        return (
            <div className="container-fluid d-flex flex-column align-items-center">
                <h1>The Boulder Bike Tour is comming!</h1>
                <div>Countdown</div>
                <h2>See you on 1 April 2020</h2>
                <div><ButtonLinks/></div>
            </div>
        )
    }
        
}

export default Hero