import React from "react";
import { Link } from "react-router-dom";

export const StockProPart = () => {
  return (
    <div className="pack__contain">
      <div className="pack pack__height">
        <h3 className="pack__title">
          Professionnel
          <br />
        </h3>

        <h5 className="text__pack "></h5>
        <div className="pack__price testprice">
          <h2> 0,70€ la palette/jour </h2>
          <p className="text__hover">Coup de fourche entré/sortie 3€</p>
        </div>

        {/* <Link className="pack__button">
          <button className="pack__buttongreen">Réservation</button>
        </Link> */}
      </div>
      <div className="pack pack__height">
        <h3 className="pack__title">
          Particulier
          <br />
        </h3>

        <h5 className="text__pack "></h5>
        <div className="pack__price testprice">
          <h2> 15m2/mois </h2>
        </div>

        {/* <Link className="pack__button">
          <button className="pack__buttongreen">Réservation</button>
        </Link> */}
      </div>
    </div>
  );
};
