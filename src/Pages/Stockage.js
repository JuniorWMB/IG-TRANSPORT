import React from "react";
import Header from "../components/Header";
import StockageText from "../components/StockageText";
import { StockProPart } from "../components/StockProPart";

function Stockage() {
  return (
    <div>
      <div className="header__sousHeader">
        <StockageText />
      </div>
      <StockProPart />
    </div>
  );
}

export default Stockage;
