import React, { Component } from 'react'
import ContestBanner from './ContestBanner'
import Hero from '../Home/Hero/Hero'
import About from './About'

class Home extends Component {
    render () {
        return (
            <div>
                <ContestBanner/>
                <Hero />
                <About />
                
            </div>
        )
    }
    
}

export default Home