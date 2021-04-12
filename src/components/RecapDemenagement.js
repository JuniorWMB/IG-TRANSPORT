import React from "react";

function RecapDemenagement({
  toggleBlocks,
  arrondiDist,
  addressGO,
  cityEnd,
  totalBasket,
  volumeCalcul,
  date,
  endDate,
  totalQuantity,
  totalTest,
}) {
  // const { test } = useContext(KilometreContext);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

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
          <p className="recapInfo">
            {" "}
            {totalBasket ? totalBasket : volumeCalcul} m3
          </p>
        </div>
        <div className="yourFormule recapAll">
          <p className="espacehelp recapTitle">Formule choisie</p>
          <p className="recapInfo">
            {toggleBlocks === 1 ? <p>Basic</p> : null}
            {toggleBlocks === 2 ? <p>Eco +</p> : null}
            {toggleBlocks === 3 ? <p>Securité</p> : null}
            {toggleBlocks === 4 ? <p>Premium</p> : null}
          </p>
        </div>
      </div>
      <div className="blockBas">
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Dates Chargement:</p>
          <p className="recapInfo">
            {date[0].toLocaleDateString("fr-FR", options)}
          </p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Dates de Livraison :</p>
          <p className="recapInfo">
            {endDate[1].toLocaleDateString("fr-FR", options)}
          </p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Emballage :</p>
          <p className="recapInfo">{totalTest} produit</p>
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
