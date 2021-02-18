import React, { useState } from "react";

function StartAddress({ setCount, count }) {
  const [city, setCity] = useState("");
  const [stair, setStair] = useState("");
  const [lift, setLift] = useState("");
  const [portage, setPortage] = useState("");
  const [accessTruck, setAccesTruck] = useState("");
  return (
    <div className="contain__startadress">
      <div>{/* <h2>Votre adresse de départ</h2> */}</div>
      <form action="" className="contain__formadressstart">
        <h1>Adresse de départ</h1>

        <div className="city start">
          <p>Adresse :</p>
          <input
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
              console.log("city", city);
            }}
            placeholder="13 square gotham 91200 Athis Mons"
          />
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
            <option value="Possible">Possible</option>
            <option value="Difficile">Difficile</option>
          </select>
        </div>
        <div className="btn btn2">
          <button onClick={() => setCount(count - 1)}>PREVIOUS</button>
          <button onClick={() => setCount(count + 1)}>NEXT</button>
        </div>
      </form>
    </div>
  );
}

export default StartAddress;