import React from 'react'
import MapFrame from './MapFrame'
import HeadingBanner from "../General/HeadingBanner"
import peloton from "images/peloton.jpg"


const MapPage = () =>{
    return(
        <div>
            <HeadingBanner
                    image={peloton}
                    heading="Checkout the riders' live position"
                />
            <MapFrame/>
        </div>

    )

}

export default MapPage