import React from 'react'
import MapFrame from './MapFrame'
import HeadingBanner from "../General/HeadingBanner"
import Footer from "../General/Footer"
import peloton from "images/peloton.jpg"


const MapPage = () =>{
    return(
        <div className="m-2">
            <HeadingBanner
                    image={peloton}
                    heading="Riders' live tracking"
                />
            <MapFrame/>
        </div>

    )

}

export default MapPage