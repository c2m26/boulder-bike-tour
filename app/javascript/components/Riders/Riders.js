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

            <div className="container-fluid mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="card col-xl-6 col-lg-68 col-md-10 col-sm-11 col-11">
                        <RidersTable />
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Riders