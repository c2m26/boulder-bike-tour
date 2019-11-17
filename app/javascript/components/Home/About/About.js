import React from 'react'
import HeadingBanner from '../../General/HeadingBanner'
import TextCol from './TextCol'
import img from "images/peloton.jpg"

const About = () => {
    return (
        
        <div>
            <HeadingBanner
                image={img}
                heading="About"
            />

            <TextCol />
        </div>
    )
}

export default About