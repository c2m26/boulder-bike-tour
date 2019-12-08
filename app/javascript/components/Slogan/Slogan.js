import React from 'react'
import ContestBanner from '../General/ContestBanner'
import SloganForm from '../Slogan/SloganForm'
import Footer from "../General/Footer"

const Slogan = () => {
    return (
        <div id="vh" className="d-flex flex-column">
            
            <ContestBanner/>
            <div className="row m-2 d-flex flex-column justify-content-center align-items-center flex-fill">
                <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 card card-shadow p-3">
                    <SloganForm/>
                </div>
            </div>   
            <Footer/>

        </div>
        

    )
} 

export default Slogan