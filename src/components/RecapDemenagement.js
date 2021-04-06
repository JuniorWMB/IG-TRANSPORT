import React from "react";

function RecapDemenagement({ arrondiDist, addressGO, cityEnd }) {
  // const { test } = useContext(KilometreContext);

  return (
    <div className="blockDemenagementRecap">
      <div className="blockHaut">
        <div className="destination recapAll">
          <p className="espacehelp recapTitle">Votre trajet</p>
          <p className="recapInfo recapInfoInText">
            de
            <span style={{ marginLeft: ".4rem", marginRight: ".4rem" }}>
              {addressGO}
            </span>
            à
            <span style={{ marginLeft: ".4rem", marginRight: ".4rem" }}>
              {cityEnd}
            </span>
          </p>
          <div>
            <p className="recapInfo" style={{ marginLeft: "30px" }}>
              {arrondiDist} Km
            </p>
          </div>
        </div>

        <div className="yourVolume recapAll">
          <p className="espacehelp recapTitle">Votre volume</p>
          <p className="recapInfo"> metre cube</p>
        </div>
        <div className="yourFormule recapAll">
          <p className="espacehelp recapTitle">Formule choisie</p>
          <p className="recapInfo">volume eco+</p>
        </div>
      </div>
      <div className="blockBas">
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Dates :</p>
          <p className="recapInfo">le 21juin 2021</p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Flexibilité :</p>
          <p className="recapInfo">Aucune</p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Emballage :</p>
          <p className="recapInfo">0 produit</p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Valeur à assurer :</p>
          <p className="recapInfo">5000 €</p>
        </div>
      </div>
      <div className="montantTotal">
        <p className="espacehelp montantCapitalize">Montant total estime :</p>
        <p className="price">3000€</p>
      </div>
    </div>
  );
}

export default RecapDemenagement;
