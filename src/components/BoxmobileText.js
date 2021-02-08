import React from "react";

const BoxmobileText = () => {
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
            <select name="portage" id="portage">
              <option value="">10 à 20 mètres de portage: 20€</option>
              <option value="">20 à 40 mètres de portage: 40€</option>
              <option value="">40 à 80 mètres de portage: 60€</option>
              <option value="">+ 80 mètres de portage: 80€</option>
            </select>
          </div>
          <div className="portage__input input__total">
            <p>Kilomètre supplémentaire: 0,75€/Km</p>
            <div>
              <label htmlFor="total">Total: </label>
              <input type="text" />
            </div>
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
            <select name="portage" id="portage">
              <option value="">10 à 20 mètres de portage: 20€</option>
              <option value="">20 à 40 mètres de portage: 40€</option>
              <option value="">40 à 80 mètres de portage: 60€</option>
              <option value="">+ 80 mètres de portage: 80€</option>
            </select>
          </div>
          <div className="portage__input input__total">
            <p>Kilomètre supplémentaire: 0,75€/Km</p>
            <div>
              <label htmlFor="total">Total: </label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxmobileText;
