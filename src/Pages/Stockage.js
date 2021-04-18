import React from "react";
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
