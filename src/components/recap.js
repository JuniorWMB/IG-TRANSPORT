import React, { useState } from "react";
import Maps from "./Maps";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";
import { getDistance, getPreciseDistance } from "geolib";

function Recap() {
  const [address, setAdress] = useState("");
  const [distance, setDistance] = useState("0");
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    console.log("testcoor", latLong);
    setAdress(value);
    setCoordinates(latLong);
  };
  console.log("adress", coordinates);

  // let pdis = getPreciseDistance(
  //   { latitude: 20.0504188, longitude: 64.4139099 },
  //   { latitude: 51.528308, longitude: -0.3817765 }
  // );
  // alert(`Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM`);
  // setDistance(pdis);
  const pdis = getPreciseDistance(
    // { latitude: 20.0504188, longitude: 64.4139099 },
    { latitude: coordinates.lat, longitude: coordinates.lng },
    { latitude: 43.280555, longitude: 5.2404128 }
  );

  const distanceKm = pdis / 1000;
  const arrondiDist = Math.round(distanceKm * 100) / 100;
  // const test = () => {
  //   setDistance(distanceKm);
  // };
  // setDistance(distanceKm);

  // console.log("distance", distance);

  return (
    <div style={{ display: "flex" }}>
      <Maps />

      <div>
        <div>
          <p>Lat:{coordinates.lat} </p>
          <br />
          <p>Long:{coordinates.lng} </p>
          <br />
          <p>addresse:{address} </p>
          <p>Distance: {arrondiDist}KM</p>
        </div>
        <PlacesAutocomplete
          value={address}
          onChange={setAdress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div key={suggestions.description}>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        {/* <div className="map-container">
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={{ lat: 40.7128, lng: -74.006 }}
            options={options}
          >
            <DistanceMatrixService
              options={{
                destinations: [{ lat: 1.296788, lng: 103.778961 }],
                origins: [{ lng: 72.89216, lat: 19.12092 }],
                travelMode: "DRIVING",
              }}
              //  
            />
          </GoogleMap>
        </div> */}
      </div>
    </div>
  );
}

export default Recap;
