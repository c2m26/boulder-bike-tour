import React, { Component } from 'react'
import ContestBanner from '../General/ContestBanner'
import Hero from '../Home/Hero/Hero'
import About from '../Home/About/About'
import Countdown from './Countdown.js/Countdown'

class Home extends Component {
    render () {
        return (
            <div>
                <Hero/>
                <About />
            </div>
        )
    }
    
}

export default Home