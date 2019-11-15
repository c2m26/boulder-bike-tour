import React, { Component } from 'react'
import Contest_banner from './Constest_banner'
import Hero from './Hero/Hero'


class Home extends Component {
    render () {
        return (
            <div>
                <Contest_banner/>
                <Hero/>
            </div>
        )
    }
    
}

export default Home