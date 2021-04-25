import React, { useEffect, useState } from "react";

import { getPreciseDistance } from "geolib";
import RecapDemenagement from "./RecapDemenagement";
import RecapDepart from "./recapDepart";
import EndRecap from "./EndRecap";
import FormulaireRecap from "./FormulaireRecap";

function Recap({
  totalQuantityRecap,
  totalFormule,
  totalQuantityV2,
  setToggleBloks,
  toggleBlocks,
  coordianateLongEnd,
  coordianateLatEnd,
  coordianateLat,
  coordianateLong,
  addressGO,
  cityEnd,
  stair,
  setStair,
  lift,
  setLift,
  portage,
  setPortage,
  accessTruck,
  setAccesTruck,
  stairEnd,
  liftEnd,
  portageEnd,
  accessTruckEnd,
  setTotalBasket,
  totalBasket,
  volumeCalcul,
  date,
  setDate,
  endDate,
  setEndDate,
  totalQuantity,
  totalTest,
  setKiloDistance,
  quantityRecapTotal,
}) {
  const pdis = getPreciseDistance(
    { latitude: coordianateLat, longitude: coordianateLong },
    { latitude: coordianateLatEnd, longitude: coordianateLongEnd }
  );

  const distanceKm = pdis / 1000;
  let arrondiDist = Math.round(distanceKm * 100) / 100;

  const [totalDevisFinal, setTotalDevisFinal] = useState(0);

  useEffect(() => {
    let distanceFormuleTotal = arrondiDist * 1.3;
    setKiloDistance(distanceFormuleTotal);
  }, [arrondiDist, setKiloDistance]);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px " }}>
      <h1 className="titleRecapBlock">Votre déménagement</h1>
      <RecapDemenagement
        setTotalDevisFinal={setTotalDevisFinal}
        quantityRecapTotal={quantityRecapTotal}
        totalQuantityRecap={totalQuantityRecap}
        totalFormule={totalFormule}
        totalTest={totalTest}
        totalQuantity={totalQuantity}
        setToggleBloks={setToggleBloks}
        toggleBlocks={toggleBlocks}
        arrondiDist={arrondiDist}
        addressGO={addressGO}
        cityEnd={cityEnd}
        volumeCalcul={volumeCalcul}
        totalBasket={totalBasket}
        setTotalBasket={setTotalBasket}
        date={date}
        setDate={setDate}
        endDate={endDate}
        setEndDate={setEndDate}
        totalQuantityV2={totalQuantityV2}
      />
      <h1 className="titleRecapBlock">Départ</h1>
      <RecapDepart
        stair={stair}
        setStair={setStair}
        lift={lift}
        setLift={setLift}
        portage={portage}
        setPortage={setPortage}
        accessTruck={accessTruck}
        setAccesTruck={setAccesTruck}
      />
      <h1 className="titleRecapBlock">Arrivée</h1>

      <EndRecap
        stairEnd={stairEnd}
        liftEnd={liftEnd}
        portageEnd={portageEnd}
        accessTruckEnd={accessTruckEnd}
      />
      <h1 className="titleRecapBlock">Vos coordonnées</h1>
      <FormulaireRecap
        addressGO={addressGO}
        cityEnd={cityEnd}
        arrondiDist={arrondiDist}
        volumeCalcul={volumeCalcul}
        totalBasket={totalBasket}
        date={date}
        endDate={endDate}
        totalQuantityV2={totalQuantityV2}
        totalDevisFinal={totalDevisFinal}
      />
    </div>
  );
}

export default Recap;
