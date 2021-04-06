import React, { useState } from "react";
import DevisForm from "../components/DevisForm";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import TotalVolumeGoodContext from "../components/ChoiceMeuble"
function Devis() {
  // start adress
  const [stair, setStair] = useState("");
  const [lift, setLift] = useState("");
  const [portage, setPortage] = useState("");
  const [accessTruck, setAccesTruck] = useState("");
  const [address, setAdress] = useState("");
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
  const coorLat = coordinates.lat;
  const coorLng = coordinates.lng;
  // start adress

  //end adress
  const [cityEnd, setCityEnd] = useState("");
  const [stairEnd, setStairEnd] = useState("");
  const [liftEnd, setLiftEnd] = useState("");
  const [portageEnd, setPortageEnd] = useState("");
  const [accessTruckEnd, setAccesTruckEnd] = useState("");
  const [coordinatesEnd, setCoordinatesEnd] = useState({
    lat: "",
    lng: "",
  });

  const handleSelectEnd = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    console.log("testcoor", latLong);
    setCityEnd(value);
    setCoordinatesEnd(latLong);
  };

  const coorLatEnd = coordinates.lat;
  const coorLngEnd = coordinates.lng;
  //end adress

  console.log("states", coordinates.lng);

  return (
    <div>
      <div className="header__sousHeader"></div>
      <DevisForm
        stair={stair}
        setStair={setStair}
        lift={lift}
        setLift={setLift}
        portage={portage}
        setPortage={setPortage}
        accessTruck={accessTruck}
        setAccesTruck={setAccesTruck}
        address={address}
        setAdress={setAdress}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        handleSelect={handleSelect}
        cityEnd={cityEnd}
        setCityEnd={setCityEnd}
        stairEnd={stairEnd}
        setStairEnd={setStairEnd}
        liftEnd={liftEnd}
        setLiftEnd={setLiftEnd}
        portageEnd={portageEnd}
        setPortageEnd={setPortageEnd}
        accessTruckEnd={accessTruckEnd}
        setAccesTruckEnd={setAccesTruckEnd}
        coordinatesEnd={coordinatesEnd}
        setCoordinatesEnd={setCoordinatesEnd}
        handleSelectEnd={handleSelectEnd}
        coorLatEnd={coorLatEnd}
        coorLngEnd={coorLngEnd}
        coorLat={coorLat}
        coorLng={coorLng}
      />
    </div>
  );
}

export default Devis;
