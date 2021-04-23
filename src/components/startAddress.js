import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import { getDistance, getPreciseDistance } from "geolib";
import { AdressContext } from "../context/AdressContext";

function StartAddress({
  setCount,
  count,
  stair,
  setStair,
  lift,
  setLift,
  portage,
  setPortage,
  accessTruck,
  setAccesTruck,
  address,
  setAdress,
  coordinates,
  setCoordinates,
  handleSelect,
  volumeCalcul,
  totalBasket,
  setPortageTotalStart,
  portageTotalStart,
}) {
  console.log("toto", totalBasket);
  let totalStart = 0;

  if (portage === "De 15m à 29m") {
    totalStart = totalStart + 30 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  } else if (portage === "Moins de 15m") {
    totalStart = totalStart + 15 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  } else if (portage === "De 30m à 39m") {
    totalStart = totalStart + 39 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  } else if (portage === "De 40m à 49m") {
    totalStart = totalStart + 49 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  } else if (portage === "De 50m à 59m") {
    totalStart = totalStart + 59 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  } else if (portage === "De 60m à 79m") {
    totalStart = totalStart + 79 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  } else if (portage === "De 80m à 100m") {
    totalStart =
      totalStart + 100 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalStart(totalStart);
  }

  return (
    <div className="contain__startadress">
      <AdressContext.Provider value={(coordinates, setCoordinates)}>
        <form action="" className="contain__formadressstart">
          <h1>Adresse de départ</h1>

          <div className="city start">
            <p>Adresse :</p>

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
                <div key={suggestions.description} className="inputStart">
                  <input
                    style={{ width: "520px" }}
                    {...getInputProps({
                      placeholder: "13 square gotham 91200 Athis Mons",
                      className: "location-search-input",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
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
                          <span className="textDropdown">
                            {suggestion.description}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="stage start">
            <p>etage : </p>
            <select
              name=""
              id=""
              value={stair}
              onChange={(e) => {
                setStair(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="étage 1">1</option>
              <option value="étage 2">2</option>
              <option value="étage 3">3</option>
              <option value="étage 4">4</option>
              <option value="étage 5">5</option>
            </select>
          </div>
          <div className="lift start">
            <p>Ascenseur : </p>
            <select
              name=""
              id=""
              value={lift}
              onChange={(e) => {
                setLift(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>
          <div className="distance__portage start">
            <p>Distance de portage : </p>
            <select
              name=""
              id=""
              value={portage}
              onChange={(e) => {
                setPortage(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="Moins de 15m">Moins de 15m</option>
              <option value="De 15m à 29m">De 15m à 29m</option>
              <option value="De 30m à 39m">De 30m à 39m</option>
              <option selected="true" value="De 40m à 49m">
                De 40m à 49m
              </option>
              <option value="De 50m à 59m">De 50m à 59m</option>
              <option value="De 60m à 79m">De 60m à 79m</option>
              <option value="De 80m à 100m">De 80m à 100m</option>
            </select>
          </div>
          <div className="start">
            <p>Accessibilité camion 19T</p>
            <select
              name=""
              id=""
              value={accessTruck}
              onChange={(e) => {
                setAccesTruck(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="Possible">Possible</option>
              <option value="Difficile">Difficile</option>
              <option value="Impossible">Impossible</option>
            </select>
          </div>
          <div className="btn btn2">
            <button onClick={() => setCount(count - 1)}>Précedent</button>
            <button disabled={!address} onClick={() => setCount(count + 1)}>
              Suivant
            </button>
          </div>
        </form>
      </AdressContext.Provider>
    </div>
  );
}

export default StartAddress;
