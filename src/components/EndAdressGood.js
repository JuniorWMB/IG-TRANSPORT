import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { getDistance, getPreciseDistance } from "geolib";

function EndAdressGood({
  setCount,
  count,
  cityEnd,
  setCityEnd,
  stairEnd,
  setStairEnd,
  liftEnd,
  setLiftEnd,
  portageEnd,
  setPortageEnd,
  accessTruckEnd,
  setAccesTruckEnd,
  handleSelectEnd,
  totalBasket,
  volumeCalcul,
  setPortageTotalEnd,
  portageTotalEnd,
}) {
  let totalStart = 0;

  if (portageEnd === "De 15m à 29m") {
    totalStart = totalStart + 30 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);
    console.log("portageEnd test 1:", portageTotalEnd);
  } else if (portageEnd === "Moins de 15m") {
    totalStart = totalStart + 15 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);

    console.log("portageEnd test 2:", portageTotalEnd);
  } else if (portageEnd === "De 30m à 39m") {
    totalStart = totalStart + 39 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);

    console.log("portageEnd test ?:", portageTotalEnd);
  } else if (portageEnd === "De 40m à 49m") {
    totalStart = totalStart + 49 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);

    console.log("portageEnd test 3:", portageTotalEnd);
  } else if (portageEnd === "De 50m à 59m") {
    totalStart = totalStart + 59 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);

    console.log("portageEnd test 4:", portageTotalEnd);
  } else if (portageEnd === "De 60m à 79m") {
    totalStart = totalStart + 79 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);
    console.log("portageEnd test 5:", portageTotalEnd);
  } else if (portageEnd === "De 80m à 100m") {
    totalStart =
      totalStart + 100 * (Number(totalBasket) + Number(volumeCalcul));
    setPortageTotalEnd(totalStart);
    console.log("portageEnd test 6:", portageTotalEnd);
  }

  return (
    <div className="contain__startadress">
      <form action="" className="contain__formadressstart">
        <h1>Adresse d'arrivée</h1>
        <div className="city start">
          <p>Adresse : </p>
          {/* test */}
          <PlacesAutocomplete
            value={cityEnd}
            onChange={setCityEnd || ""}
            onSelect={handleSelectEnd}
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
                    placeholder: "Ici votre adresse d'arrivée...",
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
          <p>etage :</p>
          <select
            name=""
            id=""
            value={stairEnd}
            onChange={(e) => {
              setStairEnd(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="lift start">
          <p>Ascenseur : </p>
          <select
            name=""
            id=""
            value={liftEnd}
            onChange={(e) => {
              setLiftEnd(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div>
        <div className="distance__portage start">
          <p>Distance de portage:</p>
          <select
            name=""
            id=""
            value={portageEnd}
            onChange={(e) => {
              setPortageEnd(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Moins de 15m">Moins de 15m</option>
            <option value="De 15m à 29m">De 15m à 29m</option>
            <option value="De 30m à 39m">De 30m à 39m</option>
            <option value="De 40m à 49m">De 40m à 49m</option>
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
            value={accessTruckEnd}
            onChange={(e) => {
              setAccesTruckEnd(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Possible">Possible</option>
            <option value="Difficile">Difficile</option>
            <option value="Impossible">Impossible</option>
          </select>
        </div>
        <div className="btn btn2">
          <button onClick={() => setCount(count - 1)}>précedent</button>
          <button disabled={!cityEnd} onClick={() => setCount(count + 1)}>
            suivant
          </button>
        </div>
      </form>
    </div>
  );
}

export default EndAdressGood;
