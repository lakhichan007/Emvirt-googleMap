import React from "react";
import "./map.css"
import { useState } from "react";
import { MapContainer,TileLayer } from "react-leaflet";
import L from "leaflet"
const MyMap=()=>{
    const[center,setcenter]=useState({lat:28.5678,lng:77.6874})
    const zoom_Level=10
   let  url=`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=nR3yuPVdrldkpIiKM4Cz`;
   let attribution=`<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
    console.log(center)
    console.log(listing.geolocation.lat)
    return(
        <>
        <div id="map-container">
            <header id="header">
                <p id="header-text">Google Map</p>
            </header>
            <MapContainer center={center} zoom={zoom_Level} style={{height:"85vh",width:"100%"}}>
                <TileLayer 
                url={url} attribution={attribution}
                />
            </MapContainer>
            <button id="new-route-btn">Go to the Route</button>
        </div>   
        </>  
        
    
    )
}

export default MyMap