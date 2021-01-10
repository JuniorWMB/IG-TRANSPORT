import React from "react";
import { Link } from "react-router-dom";

function BlockMultiDevis() {
  return (
    <div className="container__multiblock">
      <Link to="/devis" className="multiblock">
        <p>Déménagement</p>
      </Link>
      <div className="multiblock">
        <p>Stockage</p>
      </div>
      <div className="multiblock">
        <p>Garde Meuble</p>
      </div>
    </div>
  );
}

export default BlockMultiDevis;
