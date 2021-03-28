import React, { useState } from "react";
import BoxMobileBlock from "./BoxMobileBlock";
import BoxMobilePromo from "./BoxMobilePromo";
import BoxMobileFourCube from "./BoxMobileFourCube";

const BoxmobileText = () => {
  const [distPortage, setDistPortage] = useState("");
  const [distPortageLarge, setDistPortageLarge] = useState("");

  let totalBoxMobile = Number(distPortage) + 50;
  let totalBoxMobileLarge = Number(distPortageLarge) + 100;

  const handlePortageLarge = (e) => {
    setDistPortageLarge(e.target.value);
    setDistPortage(e.target.value);
  };
  const handlePortage = (e) => {
    setDistPortage(e.target.value);
  };

  return (
    <div className="boxmobiletext__contain">
      <BoxMobileFourCube
        titleQuatre="Volume 4m3"
        livraison="Livraison à votre domicile: 50€"
        portage="Portage:"
        etage="étage:"
        total="Total:"
        valider="Valider"
        handlePortage={handlePortage}
        totalBoxMobile={totalBoxMobile}
      />
      <BoxMobileBlock
        titleHuit="Volume 8m3"
        livraison="Livraison à votre domicile: 100€"
        portage="Portage:"
        etage="étage:"
        total="Total:"
        valider="Valider"
        handlePortageLarge={handlePortageLarge}
        totalBoxMobileLarge={totalBoxMobileLarge}
      />
      <BoxMobilePromo titlePromo="Offre Promotionnel" />
    </div>
  );
};

export default BoxmobileText;
