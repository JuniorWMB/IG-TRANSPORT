import React from "react";
import Garde from "../components/Garde";
import GardeText from "../components/GardeText";

function GardeMeuble() {
  return (
    <div>
      <div className="header__sousHeader">
        <GardeText />
      </div>
      <Garde />
    </div>
  );
}

export default GardeMeuble;
