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

function Recap({
  setToggleBloks,
  toggleBlocks,
  coordianateLongEnd,
  coordianateLatEnd,
  coordianateLat,
  coordianateLong,
  addressGO,
  cityEnd,
  stair,
  setStair,
  lift,
  setLift,
  portage,
  setPortage,
  accessTruck,
  setAccesTruck,
  stairEnd,
  liftEnd,
  portageEnd,
  accessTruckEnd,
  setTotalBasket,
  totalBasket,
  volumeCalcul,
  date,
  setDate,
  endDate,
  setEndDate,
  totalQuantity,
  setTotalQuantity,
  totalTest,
}) {
  // const [address, setAdress] = useState("");
  // const [distance, setDistance] = useState("0");
  // const [coordinates, setCoordinates] = useState({
  //   lat: "",
  //   lng: "",
  // });

  // const handleSelect = async (value) => {
  //   const results = await geocodeByAddress(value);
  //   const latLong = await getLatLng(results[0]);
  //   console.log("testcoor", latLong);
  //   setAdress(value);
  //   setCoordinates(latLong);
  // };
  // console.log("adress", coordinates);

  const pdis = getPreciseDistance(
    // { latitude: 48.7104542, longitude: 2.5174296 },
    { latitude: coordianateLat, longitude: coordianateLong },
    { latitude: coordianateLatEnd, longitude: coordianateLongEnd }
    // { latitude: 43.280555, longitude: 5.2404128 }
  );

  const distanceKm = pdis / 1000;
  const arrondiDist = Math.round(distanceKm * 100) / 100;
  // const test = () => {
  //   setDistance(distanceKm);
  // };
  // setDistance(distanceKm);

  console.log("quantity", totalQuantity);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px " }}>
      <h1 className="titleRecapBlock">Votre déménagement</h1>
      <RecapDemenagement
        totalTest={totalTest}
        totalQuantity={totalQuantity}
        setToggleBloks={setToggleBloks}
        toggleBlocks={toggleBlocks}
        arrondiDist={arrondiDist}
        addressGO={addressGO}
        cityEnd={cityEnd}
        totalBasket={totalBasket}
        setTotalBasket={setTotalBasket}
        volumeCalcul={volumeCalcul}
        date={date}
        setDate={setDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <h1 className="titleRecapBlock">Départ</h1>
      <RecapDepart
        stair={stair}
        setStair={setStair}
        lift={lift}
        setLift={setLift}
        portage={portage}
        setPortage={setPortage}
        accessTruck={accessTruck}
        setAccesTruck={setAccesTruck}
      />
      <h1 className="titleRecapBlock">Arrivée</h1>
      <EndRecap
        stairEnd={stairEnd}
        liftEnd={liftEnd}
        portageEnd={portageEnd}
        accessTruckEnd={accessTruckEnd}
      />
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
