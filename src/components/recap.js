import React, { useState } from "react";
import Maps from "./Maps";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { getDistance, getPreciseDistance } from "geolib";
import RecapDemenagement from "./RecapDemenagement";
import RecapDepart from "./recapDepart";
import EndRecap from "./EndRecap";
import FormulaireRecap from "./FormulaireRecap";
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

  const pdis = getPreciseDistance(
    { latitude: 48.7104542, longitude: 2.5174296 },
    // { latitude: coordinates.lat, longitude: coordinates.lng },
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
    <div style={{ display: "flex", flexDirection: "column", padding: "20px " }}>
      <h1 className="titleRecapBlock">Votre déménagement</h1>
      <RecapDemenagement arrondiDist={arrondiDist} />
      <h1 className="titleRecapBlock">Départ</h1>
      <RecapDepart />
      <h1 className="titleRecapBlock">Arrivée</h1>
      <EndRecap />
      <h1 className="titleRecapBlock">Vos coordonnées</h1>
      <FormulaireRecap />
      <div>
        {/* <div>
          <p>Lat:{coordinates.lat} </p>
          <br />
          <p>Long:{coordinates.lng} </p>
          <br />
          <p>addresse:{address} </p>
          <p>Distance: {arrondiDist}KM</p>
        </div> */}
        {/* <PlacesAutocomplete
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
                      <span className="dropdown">{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete> */}
      </div>
    </div>
  );
}

export default Recap;
