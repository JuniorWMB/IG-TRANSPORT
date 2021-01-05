import React from "react";
import Garde from "../components/Garde";
import GardeText from "../components/GardeText";
import Header from "../components/Header";

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
