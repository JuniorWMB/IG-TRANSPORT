import React from "react";

import "../App.css";

import Carousel from "./Carousel";

function SousHeader() {
  return (
    <div>
      <div className="header__sousHeader">
        <div className="sousHeader__text">
          <h4>Vente de produit</h4>
          <h3>Tout pour faciliter votre demenagement</h3>
          <h4>Carton, House matelas,Carton vaiselle...</h4>
          <button className="sousHeader__button">
            <p>Acheter </p>
            {/* <ArrowForwardIosIcon size="medium" /> */}
          </button>
        </div>
        <div className="sousHeader__carouselpric">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default SousHeader;
