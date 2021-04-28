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
          <p className="espacehelp recapTitle">Votre trajet:</p>
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

        <div className="yourVolume recapAll blockwidth">
          <p className="espacehelp recapTitle">Votre volume:</p>
          <p className="recapInfo  police">
            {" "}
            {totalBasket ? totalBasket : volumeCalcul} m3
          </p>
        </div>
        <div className="yourFormule recapAll blockwidth">
          <p className="espacehelp recapTitle">Formule choisie:</p>
          <p className="recapInfo police">
            {toggleBlocks === 1 ? <p>Basic</p> : null}
            {toggleBlocks === 2 ? <p>Eco +</p> : null}
            {toggleBlocks === 3 ? <p>Securité</p> : null}
            {toggleBlocks === 4 ? <p>Premium</p> : null}
          </p>
        </div>
      </div>
      <div className="blockBas blockwidmaster">
        <div className="dateRecap datestyle blockwidth">
          <p className="espacehelp recapTitle">Dates Chargement:</p>
          <p className="recapInfo police">
            {date[0].toLocaleDateString("fr-FR", options)}
          </p>
        </div>
        <div className="dateRecap datestyle blockwidth">
          <p className="espacehelp recapTitle">Dates de Livraison :</p>
          <p className="recapInfo police">
            {endDate[1].toLocaleDateString("fr-FR", options)}
          </p>
        </div>
        <div className="dateRecap blockwidth">
          <p className="espacehelp recapTitle">Emballage :</p>
          <p className="recapInfo police">{totalQuantityV2} produits</p>
        </div>
        <div className="dateRecap blockwidth">
          <p className="espacehelp recapTitle">Valeur à assurer :</p>
          <p className="recapInfo police">{totalAssurance} €</p>
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
