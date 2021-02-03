import React from "react";

function EndAdressGood({ setCount, count }) {
  return (
    <div className="contain__startadress">
      <form action="" className="contain__formadressstart">
        <h1>Adresse d'arrivée</h1>
        <div className="city start">
          <p>Ville :</p>
          <input type="text" />
        </div>
        <div className="stage start">
          <p>etage :</p>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
        <div className="lift start">
          <p>Ascenseur :</p>
          <select name="" id="">
            <option value="">Oui</option>
            <option value="">Non</option>
          </select>
        </div>
        <div className="distance__portage start">
          <p>Distance de portage :</p>
          <select name="" id="">
            <option value="">Moins de 15m</option>
            <option value="">De 15m à 29m</option>
            <option value="">De 30m à 39m</option>
            <option value="">De 40m à 49m</option>
            <option value="">De 50m à 59m</option>
            <option value="">De 60m à 79m</option>
            <option value="">De 80m à 100m</option>
          </select>
        </div>
        <div className="start">
          <p>Accessibilité camion 19T</p>
          <select name="" id="">
            <option value="">Possible</option>
            <option value="">Difficile</option>
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
