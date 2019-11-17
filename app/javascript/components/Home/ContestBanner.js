import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    background-color: yellow;
    margin: 2rem 0;
`

const ContestBanner = () => {
    return (
        <Banner className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>The contest for the event's <span className="text-bold">slogan</span> is on!</h1>
                <p>We count on your catchy suggestion to hit the spot.</p>
                <p>The winner will be awarded a free pass to the event and a monetary prize of 1000 USD.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Submit your slogan!</a>
            </div>
        </Banner>
    )
    
}

export default ContestBanner