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
  const [coordianateLat, setCoordinateLat] = useState();
  const [coordianateLong, setCoordinateLong] = useState();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    console.log("testcoor", latLong.lat);
    setAdress(value);
    setCoordinates(latLong);
    // test
    setCoordinateLat(latLong.lat);
    setCoordinateLong(latLong.lng);
  };
  const coorLat = coordinates.lat;
  const coorLng = coordinates.lng;

  console.log("Lat only", coordianateLat);
  console.log("Long only", coordianateLong);
  // start adress

  //end adress
  const [cityEnd, setCityEnd] = useState("");
  const [stairEnd, setStairEnd] = useState("1");
  const [liftEnd, setLiftEnd] = useState("Oui");
  const [portageEnd, setPortageEnd] = useState("Moins de 15m");
  const [accessTruckEnd, setAccesTruckEnd] = useState("Possible");
  const [coordinatesEnd, setCoordinatesEnd] = useState({
    lat: "",
    lng: "",
  });

  const [coordianateLatEnd, setCoordinateLatEnd] = useState();
  const [coordianateLongEnd, setCoordinateLongEnd] = useState();

  const handleSelectEnd = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    console.log("testcoor", latLong);
    setCityEnd(value);
    setCoordinatesEnd(latLong);
    setCoordinateLatEnd(latLong.lat);
    setCoordinateLongEnd(latLong.lng);
  };

  const coorLatEnd = coordinates.lat;
  const coorLngEnd = coordinates.lng;
  //end adress

  const [totalBasket, setTotalBasket] = useState();
  // let total = 0;

  console.log("states long", coordinates.lng);
  console.log("states lat", coordinates.lat);

  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <div>
      <div className="header__sousHeader sshDevis">DEVIS</div>
      <DevisForm
        totalQuantity={totalQuantity}
        setTotalQuantity={setTotalQuantity}
        coordianateLatEnd={coordianateLatEnd}
        coordianateLongEnd={coordianateLongEnd}
        coordianateLat={coordianateLat}
        coordianateLong={coordianateLong}
        setCoordinateLat={setCoordinateLat}
        setCoordinateLong={setCoordinateLong}
        date={date}
        setDate={setDate}
        endDate={endDate}
        setEndDate={setEndDate}
        totalBasket={totalBasket}
        setTotalBasket={setTotalBasket}
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
