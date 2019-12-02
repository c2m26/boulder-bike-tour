import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

class MapFrame extends React.Component{


    componentDidMount(){
        this.map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiYzJtMjYiLCJhIjoiY2szb2E4MWswMDZiNjNtbzR4b2ZjMG11NCJ9.E1ENThSFZhCs05OtNWCyNA'
        }).addTo(this.map);
    }
    
    render(){
        return(
            <div>
        
    
                <div id="map" className="container">
                    
                </div>
    
                <h1>test content</h1>
    
            </div>
        )
    }
    
    

}

export default MapFrame

