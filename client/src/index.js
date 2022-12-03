import React from "react";
import ReactDOM from "react-dom";
import { MyMap } from "./components/map";
import { MapProvider } from "./components/context";

ReactDOM.render(
  <MapProvider>
    <MyMap />
  </MapProvider>,
  document.getElementById("root")
);
