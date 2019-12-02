import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import data from '../Data/riderPlaceData.json'

// code block above fixes issues of icon display when using leaflet with webpack (got it from https://github.com/Leaflet/Leaflet/issues/4968)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class MapFrame extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data
        }
    }

    componentDidMount(){
        this.map = L.map('map').setView([40.0199432,-105.2769047], 11);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiYzJtMjYiLCJhIjoiY2szb2E4MWswMDZiNjNtbzR4b2ZjMG11NCJ9.E1ENThSFZhCs05OtNWCyNA'
        }).addTo(this.map);

        console.log(this.state)
    
        this.state.data.map(rider =>{
            return(
                L.marker([rider.Lat, rider.Long]).addTo(this.map)
                .bindPopup(rider.firstName + " " + rider.LastName)
                .openPopup()
            )
        })
        
    }

    
    
    



    
    render(){
        return(
            <div>
                <div id="map" className="container"></div>
            </div>
        )
    }
    
    

}

export default MapFrame

