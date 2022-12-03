// import React, { Fragment } from "react";
import { useState } from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "./context";

export const Markers = () => {
  const { markers } = useStateMap();

  return (
    <>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          latitude={marker[1]}
          longitude={marker[0]}
        >
          <img src={require("./images/location.png")} alt="" style={{height:"50px"}} />
        </Marker>
      ))}
    </>
  );
};
