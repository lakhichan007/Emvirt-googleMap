import "./map.css"
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { useDispatchMap,useStateMap } from "./context";
import { Markers } from "./marker";
import axios from "axios"


 export const MyMap = () => {
  const mapDispatch = useDispatchMap();
  const { markers } = useStateMap();

var arr=[]
for(let ele of markers){
    arr.push(ele)
    
}
// console.log(arr.length)
  const locateLocation=()=>{
    
    axios.post("http://localhost:5001/addlocation",{locations:arr})
    .then((res)=>{

    })
    .catch(err=>{
        console.log(err)
    })

  }

  const [mapViewport, setMapViewport] = useState({
    height: "90vh",
    width: "100%",
    longitude: 21.77,
    latitude: 77.1,
    zoom:4
  });
// console.log(arr.length)
  return (
    <div id="map-container">
        <div id="header">
            <p id="header-text">Google Map</p>
            <button onClick={locateLocation} id="new-route-btn">Locate the Route</button>
        </div>
    <ReactMapGL
      {...mapViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
      onViewportChange={setMapViewport}
      onClick={x => {
        x.srcEvent.which === 1 &&
          mapDispatch({ type: "ADD_MARKER", payload: { marker: x.lngLat } });
      }}
    >
      <Markers />
    </ReactMapGL>
    </div>
  );
};