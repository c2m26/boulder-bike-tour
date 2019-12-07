import React, { Component } from 'react'
import Navbar from '../../General/Navbar'
import ButtonLinks from './ButtonLinks'
import "./Hero.css"
import '../../../../assets/stylesheets/styles.scss'
import clip from '../../../../assets/videos/heroIntro.mp4'
import Countdown from '../Countdown.js/Countdown'



class Hero extends Component {
    
    
    
    render () {
        

        if (screen.availWidth < 1450 || screen.availHeight < 700 ){

            return(
                <div className="hero-wraper">
                    <h1>TESTE</h1>
                </div>
            )
        } else{
            
            return (
                <div id="hero-wraper">
    
                    <video autoPlay muted loop id="video">
                        <source src={clip}  type='video/mp4'/>   
                    </video>
                    
                    <div className="vid-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">    
                        <h1 id="mainHeading">The Boulder Bike Tour is comming!</h1>
                        <Countdown/>
                        <h2 id="secondHeading">See you on 1 April 2020</h2>
                    </div>
                </div>
            )

        }

        
    }
        
}

export default Hero