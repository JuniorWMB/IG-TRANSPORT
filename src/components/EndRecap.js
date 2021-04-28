import React from "react";

function EndRecap({ stairEnd, liftEnd, portageEnd, accessTruckEnd }) {
  return (
    <div className="blockDemenagementRecap blockDepart">
      <div className="blockLeftRecap">
        <div className="portageRecap dateRecap">
          <p className="espacehelp recapTitle">Portage :</p>
          <p className="recapInfo portageresp">{portageEnd}</p>
        </div>
        <div className="etageRecap dateRecap">
          <p className="espacehelp recapTitle">étage :</p>
          <p className="recapInfo">{stairEnd}</p>
        </div>
      </div>
      <div className="blockLeftRecap">
        <div className="portageRecap dateRecap">
          <p className="espacehelp recapTitle">Accessibilite camion 19T :</p>
          <p className="recapInfo">{accessTruckEnd}</p>
        </div>
        <div className="etageRecap dateRecap">
          <p className="espacehelp recapTitle">Ascenseur :</p>
          <p className="recapInfo">{liftEnd}</p>
        </div>
      </div>
    </div>
  );
}

export default EndRecap;
