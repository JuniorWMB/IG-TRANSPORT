import React from "react";
import prep from "../assets/prepbox.svg";
import logistique from "../assets/logistic.svg";
import enlevement from "../assets/chargement.svg";

const BoxMobileExplain = () => {
  return (
    <div className="picture__boxmobile">
      <img src={prep} alt="préparation de colis" />
      <img src={logistique} alt="préparation de colis" />
      <img src={enlevement} alt="préparation de colis" />
    </div>
  );
};

export default BoxMobileExplain;
