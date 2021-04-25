import React, { useState } from "react";
// import MapGL, { GeolocateControl } from "react-map-gl";
// import DeckGL, { GeoJsonLayer } from "deck.gl";
// import Geocoder from "react-map-gl-geocoder";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
// import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const TOKEN =
  "pk.eyJ1IjoiaG9wZTI0MyIsImEiOiJja2xxeGE4MmowMGRwMzBwZW9vZWlpcWVwIn0.ye1x5guILWfl-gJnqlZOQg";

mapboxgl.accessToken = TOKEN;

class Maps extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/dark-v9",

      center: [2.4, 48.7167],
      zoom: 12,
      pitch: 50,
      language: "fr",
    });
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      steps: "true",
    });
    map.addControl(directions, "top-left");
    console.log("direction", directions);
  }
  render() {
    return (
      <>
        <div
          ref={(el) => (this.mapWrapper = el)}
          className="mapWrapper"
          style={{
            width: "50vw",
            height: "80vh",
          }}
        />
        <h1>Text</h1>
      </>
    );
  }
}

export default Maps;
