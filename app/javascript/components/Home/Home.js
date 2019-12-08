import React, { Component } from 'react'
import Hero from '../Home/Hero/Hero'
import About from '../Home/About/About'

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