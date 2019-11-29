import React, { Component } from 'react'
import ButtonLinks from './ButtonLinks'
import "./Hero.css"
import '../../../../assets/stylesheets/styles.scss'
import img from "images/hero.jpg"



class Hero extends Component {
    render () {
        
        const styles = {

            backgroundImage: "url(" + img + ")",
        }

        return (
            
            <div style={styles} className="Hero">
                <div className="bg-shade d-flex flex-column justify-content-center align-items-center text-white">    
                    
                        <h1>The Boulder Bike Tour is comming!</h1>
                        <ButtonLinks />
                        <h2>See you on 1 April 2020</h2>
                    
                </div>
            </div>

        )
    }
        
}

export default Hero