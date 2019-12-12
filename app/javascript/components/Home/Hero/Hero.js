import React, { Component } from 'react'
import "./Hero.css"
import '../../../../assets/stylesheets/styles.scss'
import clip from '../../../../assets/videos/heroIntro.mp4'
import image from '../../../../assets/images/hero.jpg'
import Countdown from '../Countdown/Countdown'



class Hero extends Component {
    
    constructor(props){
        super(props)
        
        const height = window.innerHeight
        const width = window.innerWidth

        if (width < 1650 || height < 750 ) {
            this.state={
                staticView: true
            }
        } else {
            this.state={
                staticView: false
            }
        }
  
    }

    componentDidMount(){
        window.addEventListener("resize", this.setView.bind(this)) /* check why bind(this) is required for the event listner to work*/         
    }    

    setView(){

        const height = window.innerHeight
        const width = window.innerWidth
    
        if (width < 1650 || height < 750 ) {
            this.setState({
                staticView: true
            })
        } else {
            this.setState({
                staticView: false
            })
        }
    }

    componentWillUnmount(){
        window.addEventListener("resize", this.setView())           
       }
    

       render () {
        
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        console.log(this.state.staticView)
        
        const styles = {
            backgroundImage: "url(" + image + ")"
        }

        if (this.state.staticView == true){

            return(
                <div style={styles} id="hero-wraper-static">
    
                    <div className="overlay d-flex flex-column justify-content-center align-items-center text-center text-white">    
                        <h1 className="p-1" id="mainHeading">The Boulder Bike Tour is comming!</h1>
                        <Countdown/>
                        <h2 className="p-1" id="secondHeading">See you on 1 April 2020</h2>
                    </div>
                </div>
            )
        } else {
            
            return (
                <div id="hero-wraper">
    
                    <video autoPlay muted loop id="video">
                        <source src={clip}  type='video/mp4'/>   
                    </video>
                    
                    <div className="overlay d-flex flex-column justify-content-center align-items-center text-center text-white">    
                        <h1 className="p-1" id="mainHeading">The Boulder Bike Tour is comming!</h1>
                        <Countdown/>
                        <h2 className="p-1" id="secondHeading">See you on 1 April 2020</h2>
                    </div>
                </div>
            )

        }

        
    }
        
}

export default Hero