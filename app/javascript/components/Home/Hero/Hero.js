import React, { Component } from 'react'
import "./Hero.css"
import img from "images/hero.jpg"



class Hero extends Component {
    render () {
        
        const styles = {

            backgroundImage: "url(" + img + ")",
        }

        return (
            
            <div style={styles} className="Hero d-flex flex-column flew-wrap justify-content-between align-items-center text-white">
                <div className="d-flex flex-column align-items-center">
                    <h1>The Boulder Bike Tour is comming!</h1>
                    <h2>See you on 1 April 2020</h2>
                </div>
                <div>Countdown</div>
            </div>

        )
    }
        
}

export default Hero