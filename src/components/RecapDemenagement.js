import React, { useEffect } from "react";

function RecapDemenagement({
  toggleBlocks,
  arrondiDist,
  addressGO,
  cityEnd,
  totalBasket,
  volumeCalcul,
  date,
  endDate,
  totalQuantityV2,
  totalFormule,
  quantityRecapTotal,
  setTotalDevisFinal,
}) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let totalAssurance = 2000;
  let totalDevis = quantityRecapTotal + totalFormule + totalAssurance;

  useEffect(() => {
    setTotalDevisFinal(totalDevis);
  }, [setTotalDevisFinal, totalDevis]);

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
          <div className="kiloblock">
            <p
              className="recapInfo kiloresponsive"
              style={{ marginLeft: "30px" }}
            >
              {arrondiDist} Km
            </p>
          </div>
        </div>

        <div className="yourVolume recapAll">
          <p className="espacehelp recapTitle">Votre volume</p>
          <p className="recapInfo ">
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
        <div className="dateRecap datestyle">
          <p className="espacehelp recapTitle">Dates Chargement:</p>
          <p className="recapInfo">
            {date[0].toLocaleDateString("fr-FR", options)}
          </p>
        </div>
        <div className="dateRecap datestyle">
          <p className="espacehelp recapTitle">Dates de Livraison :</p>
          <p className="recapInfo">
            {endDate[1].toLocaleDateString("fr-FR", options)}
          </p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Emballage :</p>
          <p className="recapInfo">{totalQuantityV2} produit</p>
        </div>
        <div className="dateRecap">
          <p className="espacehelp recapTitle">Valeur à assurer :</p>
          <p className="recapInfo">{totalAssurance} €</p>
        </div>
      </div>
      <div className="montantTotal">
        <p className="espacehelp montantCapitalize">Montant total estime :</p>
        <p className="price">{totalDevis.toFixed(2)}€</p>
      </div>
    </div>
  );
}

export default RecapDemenagement;
