import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import data from '../Data/riderPlaceData.json'
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'



class MapFrame extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data,
        }

        // code block above fixes issues of icon display when using leaflet with webpack (got it from https://github.com/Leaflet/Leaflet/issues/4968)
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        });
    }

    componentDidMount(){
        this.map = L.map('map').setView([40.0199432,-105.2769047], 12);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiYzJtMjYiLCJhIjoiY2szb2E4MWswMDZiNjNtbzR4b2ZjMG11NCJ9.E1ENThSFZhCs05OtNWCyNA'
        }).addTo(this.map);

           
        this.state.data.map(rider =>{
            return(
                L.marker([rider.Lat, rider.Long]).addTo(this.map)
                .bindPopup(rider.firstName + " " + rider.LastName)   
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

