import React from "react";

const recapDepart = ({ stair, lift, portage, accessTruck }) => {
  return (
    <div className="blockDemenagementRecap blockDepart">
      <div className="blockLeftRecap">
        <div className="portageRecap dateRecap">
          <p className="espacehelp recapTitle">Portage : </p>
          <p className="recapInfo portageresp">{portage}</p>
        </div>
        <div className="etageRecap dateRecap">
          <p className="espacehelp recapTitle">étage :</p>
          <p className="recapInfo">{stair}</p>
        </div>
      </div>
      <div className="blockLeftRecap">
        <div className="portageRecap dateRecap">
          <p className="espacehelp recapTitle">Accessibilite camion 19T :</p>
          <p className="recapInfo">{accessTruck}</p>
        </div>
        <div className="etageRecap dateRecap">
          <p className="espacehelp recapTitle">Ascenseur :</p>
          <p className="recapInfo">{lift}</p>
        </div>
      </div>
    </div>
  );
};

export default recapDepart;
