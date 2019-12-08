import React from 'react'
import {NavLink} from 'react-router-dom'
import vintage from "images/roubaixold.jpg"
import race from "images/race.jpg"
import winner from "images/winner.jpg"
import './About.css'

const About = () => {

    const img = [
        {backgroundImage: "url(" + vintage + ")"},
        {backgroundImage: "url(" + race + ")"},
        {backgroundImage: "url(" + winner + ")"}
    ]


    return (
        
        <div id="about" className="container-fluid mt-4">
            <div id="row-height" className="row d-flex justify-content-center my-2">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                    <h2>The Roots</h2>
                    <p>Since its 1953 beginnings, it has been an outsized, spectacularly fanciful race. The first edition — dreamt up by journalist Robert Smith to boost the circulation of his struggling sports newspaper, Sports Today — was an unprecedented 125-mile lap of the Boulder hills and countryside.</p>
                </div>
                <div id="img-frame" className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12" style={img[0]} ></div>
            </div>
            
            <div id="row-height" className="row d-flex justify-content-center my-2">
                <div id="img-frame" className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12" style={img[1]} ></div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                    <h2>The Race</h2>
                    <p>The Boulder Bike Tour is a frustrating but rewarding experience. It is one of the few races entirely open to the United States that actually pushes the limits of even the most endurance focused cyclist. Held in Boulder county, it's a long, arduous two hundred miles long ride on steep hills that requires balance, attention, and willpower.</p>
                </div>
            </div>
            
            <div id="row-height" className="row d-flex justify-content-center my-2">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
                    <h2>The Prizes</h2>
                    <p>A total of around 1.2 million USD will be awarded to the teams and riders, including 400 000 USD to the winner of the final individual general classification.</p>
                    <p>The winner of the constest for the event slogan will be awarded a 1000 USD prize</p>
                    <div className="row">
                        <NavLink className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 btn btn-warning text-dark ml-2 p-2" to="/api/v1/slogans/new">Slogan contest</NavLink>
                    </div>
                </div>
                <div id="img-frame" className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12" style={img[2]} ></div>
            </div>

            
        </div>
    )
}

export default About