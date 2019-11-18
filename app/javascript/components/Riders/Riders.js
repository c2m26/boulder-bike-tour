import React from 'react'
import img from 'images/riders.jpg'
import HeadingBanner from '../General/HeadingBanner'
import RidersTable from '../Riders/RidersTable'

const Riders = () =>{

    return(
        <div>
            <HeadingBanner
                image={img}
                heading="Riders"
            />
            
            <div className="container card">
                <RidersTable />
            </div>

        </div>
        
    )
}

export default Riders