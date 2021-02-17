import React, { useState } from "react";

function EndAdressGood({ setCount, count }) {
  const [cityEnd, setCityEnd] = useState("");
  const [stairEnd, setStairEnd] = useState("");
  const [liftEnd, setLiftEnd] = useState("");
  const [portageEnd, setPortageEnd] = useState("");
  const [accessTruckEnd, setAccesTruckEnd] = useState("");
  return (
    <div className="contain__startadress">
      <form action="" className="contain__formadressstart">
        <h1>Adresse d'arrivée</h1>
        <div className="city start">
          <p>Adresse : </p>
          <input
            type="text"
            onChange={(e) => {
              setCityEnd(e.target.value);
            }}
            placeholder="69 rue krypton 14000 Caen"
          />
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

export default EndAdressGood;
