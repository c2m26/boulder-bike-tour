import React from 'react'
import HeadingBanner from '../General/HeadingBanner'
import img from "images/peloton.jpg"

const About = () => {
    return (
        <div className="container-fluid">
            <HeadingBanner
                image={img}
                heading="About"
            />

            <div className="container row">
                <div className="col-xl-4 col-ll-4 col-md-4 col-sm-12 col-12">
                    <h2>Title</h2>
                    <p>bla bla bla bla bla</p>
                </div>
                <div className="col-xl-4 col-ll-4 col-md-4 col-sm-12 col-12">
                    <h2>Title</h2>
                    <p>bla bla bla bla bla</p>
                </div>
                <div className="col-xl-4 col-ll-4 col-md-4 col-sm-12 col-12">
                    <h2>Title</h2>
                    <p>bla bla bla bla bla</p>
                </div>
            </div>
        </div>
    )
}

export default About