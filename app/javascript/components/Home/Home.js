import React, { Component } from 'react'
import ContestBanner from './ContestBanner'
import Hero from '../Home/Hero/Hero'
import ButtonLinks from './Hero/ButtonLinks'
import About from '../Home/About/About'

class Home extends Component {
    render () {
        return (
            <div>
                <ContestBanner/>
                <Hero />
                <ButtonLinks />
                <About />
            </div>
        )
    }
    
}

export default Home