import React from "react";

import { Link } from "react-router-dom";

import "../App.css";

function SousHeader() {
  return (
    <div>
      <div className="header__sousHeader">
        <div className="sousHeader__text">
          <div className="text__display">
            <h4 className="anim1">Votre spécialiste du transport</h4>
            <h3 className="anim2">
              Déménagement pour particuliers, solutions logistiques pour les
              professionels et vente de carton et fourniture de déménagement.
            </h3>
          </div>

          <Link to="/devis" className="sousHeader__button">
            <p>Votre devis</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SousHeader;
