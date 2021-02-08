import React from "react";
import prep from "../assets/prepbox.svg";
import logistique from "../assets/logistic.svg";
import enlevement from "../assets/chargement.svg";
import BoxmobileText from "./BoxmobileText";
const BoxMobileExplain = () => {
  return (
    <div className="boxmobile__contain">
      <div className="picture__boxmobile">
        <div className="mobile__pictureblock">
          <div className="mobile__pictureblock_imgp">
            <img src={prep} alt="préparation de colis" />
            <p>Nous livrons un conteneur directement chez vous</p>
            <p className="boxmobile__number">1</p>
          </div>
          <div className="mobile__pictureblock_imgp">
            <img src={logistique} alt="préparation de colis" />
            <p>Vous remplissez à votre rythme ou nous le faisons pour vous</p>
            <p className="boxmobile__number">2</p>
          </div>
          <div className="mobile__pictureblock_imgp">
            <img src={enlevement} alt="préparation de colis" />
            <p>Nous ramassons votre cube pour l'entreposer</p>
            <p className="boxmobile__number">3</p>
          </div>
        </div>
      </div>
      <BoxmobileText />
    </div>
  );
};

export default BoxMobileExplain;
