import React, { useState } from "react";

const BoxmobileText = () => {
  const [cityStart, setCityStart] = useState("");
  const [stair, setStair] = useState("");
  const [lift, setLift] = useState("");
  const [distPortage, setDistPortage] = useState("");
  const [distPortageLarge, setDistPortageLarge] = useState("");
  const [accessTruck, setAccessTruck] = useState("");

  let totalBoxMobile = Number(distPortage) + 50;
  let totalBoxMobileLarge = Number(distPortageLarge) + 100;
  return (
    <div className="boxmobiletext__contain">
      <div className="boxmobiletext__left">
        <div className="boxmobiletextblock__left boxmobiletextblock__leftvtwo">
          <div className="boxmobile__volume">
            <h2>Volume de 4m3</h2>
          </div>
          <p>Manutention caisse 4m3</p>
          <p>Ascenseur avec - de 10m de portage : 50€</p>
          <div className="portage__input">
            <label htmlFor="portage">Prix de portage: </label>
            <select
              name="portage"
              id="portage"
              value={distPortage}
              onChange={(e) => {
                setDistPortage(e.target.value);
              }}
            >
              <option value="20">10 à 20 mètres de portage: 20€</option>
              <option selected value="40">
                20 à 40 mètres de portage: 40€
              </option>
              <option value="60">40 à 80 mètres de portage: 60€</option>
              <option value="80">+ 80 mètres de portage: 80€</option>
            </select>
          </div>
          <div>
            <p>Kilomètre supplémentaire: 0,75€/Km</p>
          </div>
          <div className="boxmobile__total">
            <label htmlFor="total">Total: </label>
            {/* <input type="text" />{" "} */}
            <p> {totalBoxMobile} €</p>
          </div>
        </div>
      </div>
      <div className="boxmobiletext__right">
        <div className="boxmobiletextblock__left">
          <div className="boxmobile__volume">
            <h2>Volume de 8m3</h2>
          </div>
          <p>Manutention caisse 8m3</p>
          <p>Ascenseur avec - de 10m de portage : 100€</p>
          <div className="portage__input">
            <label htmlFor="portage">Prix de portage: </label>
            <select
              name="portage"
              id="portage"
              value={distPortageLarge}
              onChange={(e) => {
                setDistPortageLarge(e.target.value);
              }}
            >
              <option value="20">10 à 20 mètres de portage: 20€</option>
              <option selected value="40">
                20 à 40 mètres de portage: 40€
              </option>
              <option value="60">40 à 80 mètres de portage: 60€</option>
              <option value="80">+ 80 mètres de portage: 80€</option>
            </select>
          </div>
          <div>
            <p>Kilomètre supplémentaire: 0,75€/Km</p>
          </div>
          <div className="boxmobile__total">
            <label htmlFor="total">Total: </label>
            <p>{totalBoxMobileLarge} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxmobileText;
