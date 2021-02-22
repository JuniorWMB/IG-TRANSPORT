import React, { useState } from "react";

const BoxMobileBlock = ({
  titleQuatre,
  titleHuit,
  titlePromo,
  livraison,
  portage,
  etage,
  total,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="boxmobiletext__block">
      <h4>
        {titleQuatre} {titleHuit} {titlePromo}
      </h4>
      <div className="boxmobiletext__text">
        <div className="boxmobiletext__livraison">
          <p> {livraison} </p>
        </div>

        <div className="boxmobiletext__manutention">
          <p>Voulez-vous de la manutention ?</p>
          <div className="boxmobiletext__button">
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              OUI
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              NON
            </button>
          </div>
        </div>
        {show ? (
          <div className="boxmobile__show">
            <div className="boxmobile__portage">
              <p>{portage}</p>
              <select name="" id="">
                <option value="20">10m à 20m</option>
                <option value="40">20m à 40m</option>
                <option value="60">40m à 60m</option>
                <option value="80">+ de 80m</option>
              </select>
            </div>
            <div className="boxmobile__etage">
              <p>{etage}</p>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        ) : null}
        <div className="boxmobile__total">
          <p>{total}</p>
          <span> 100€</span>
        </div>
      </div>
    </div>
  );
};

export default BoxMobileBlock;
