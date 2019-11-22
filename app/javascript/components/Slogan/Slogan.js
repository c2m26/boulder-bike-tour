import React from 'react'
import ConstestBanner from '../Home/ContestBanner'
import SloganForm from '../Slogan/SloganForm'

const Slogan = () => {
    return (
        <div>
            <ConstestBanner/>
            <div className="container-fluid">
                <div className="card card-shadow p-3">
                    <SloganForm/>
                </div>    
            </div>
            
        </div>
        

    )
} 

export default Slogan