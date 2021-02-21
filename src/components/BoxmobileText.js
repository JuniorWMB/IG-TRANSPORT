import React, { useState } from "react";
import BoxMobileBlock from "./BoxMobileBlock";

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
      <BoxMobileBlock
        titleQuatre="Volume 4m3"
        livraison="Livraison à votre domicile: 50€"
        portage="Portage:"
        etage="étage:"
        total="Total:"
      />
      <BoxMobileBlock
        titleHuit="Volume 8m3"
        livraison="Livraison à votre domicile: 100€"
        portage="Portage:"
        etage="étage:"
        total="Total:"
      />
      <BoxMobileBlock titlePromo="Offre Promotionnel" />
    </div>
  );
};

export default BoxmobileText;
