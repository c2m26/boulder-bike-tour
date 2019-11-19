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
            
            <div className="row d-flex justify-content-center">
                <div className="card col-xl-8 col-lg-8 col-md-10 col-sm-11 col-11">
                    <RidersTable />
                </div>
            </div>
            

        </div>
        
    )
}

export default Riders