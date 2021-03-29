import React from "react";

function EndRecap() {
  return (
    <div className="blockDemenagementRecap blockDepart">
      <div className="blockLeftRecap">
        <div className="portageRecap dateRecap">
          <p className="espacehelp recapTitle">Portage :</p>
          <p className="recapInfo">Moins de 15m</p>
        </div>
        <div className="etageRecap dateRecap">
          <p className="espacehelp recapTitle">étage :</p>
          <p className="recapInfo">Aucun</p>
        </div>
      </div>
      <div className="blockLeftRecap">
        <div className="portageRecap dateRecap">
          <p className="espacehelp recapTitle">Accessibilite camion 19T :</p>
          <p className="recapInfo">Possible</p>
        </div>
        <div className="etageRecap dateRecap">
          <p className="espacehelp recapTitle">Ascenseur :</p>
          <p className="recapInfo">Aucun</p>
        </div>
      </div>
    </div>
  );
}

export default EndRecap;
