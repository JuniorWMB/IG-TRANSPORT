import React, { useState, useEffect } from "react";
import ChoiceMeuble from "../components/ChoiceMeuble";
import Tarif from "./TarifGood";
import StartAddress from "./startAddress";
import EndAdressGood from "./EndAdressGood";
import Recap from "./recap";

let timeline = [
  { choice: "1", text: "calculateur" },
  { choice: "2", text: "Volume total éstimé" },
  { choice: "3", text: "votre adresse de depart" },
  { choice: "4", text: "votre adresse d'arrivée" },
  { choice: "5", text: "tarif" },
  { choice: "6", text: "récapitulatif" },
];

let totalTest = 0;
let totalQuantityRecap = 0;

function DevisForm({
  totalQuantity,
  setTotalQuantity,
  coordianateLongEnd,
  coordianateLatEnd,
  coordianateLat,
  coordianateLong,
  date,
  setDate,
  endDate,
  setEndDate,
  setTotalBasket,
  totalBasket,
  stair,
  setStair,
  lift,
  setLift,
  portage,
  setPortage,
  accessTruck,
  setAccesTruck,
  address,
  setAdress,
  coordinates,
  setCoordinates,
  handleSelect,
  cityEnd,
  setCityEnd,
  stairEnd,
  setStairEnd,
  liftEnd,
  setLiftEnd,
  portageEnd,
  setPortageEnd,
  accessTruckEnd,
  setAccesTruckEnd,
  handleSelectEnd,
  coordinatesEnd,
  setCoordinatesEnd,
  coorLngEnd,
  coorLatEnd,
  coorLat,
  coorLng,
}) {
  const [count, setCount] = useState(1);
  const [volumeCalcul, setVolumeCalcul] = useState("");
  const [show, setShow] = useState(false);
  const [toggleBlocks, setToggleBloks] = useState(0);
  const [totalHeavy, setTotalHeavy] = useState(0);
  const [portageTotalStart, setPortageTotalStart] = useState(0);
  const [portageTotalEnd, setPortageTotalEnd] = useState(0);
  const [totalFormule, setTotalFormule] = useState(0);
  const [kiloDistance, setKiloDistance] = useState(0);
  const [quantityRecapTotal, setQuantityRecapTotal] = useState(0);

  let portageGeneraleTotal = portageTotalStart + portageTotalEnd;

  let volumeHeavy = 0;

  const countBack = () => {
    if (count === 1) {
      return null;
    } else {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    if (volumeCalcul.length > 0) {
      setShow(true);
    } else {
    }
  }, [volumeCalcul.length]);

  let testCalcul = 0;
  let testCalcul2 = 0;
  const [totalQuantityV2, setTotalQuantityV2] = useState(0);

  return (
    <>
      <div className="devis__contain">
        <div className="devis__timeline">
          {timeline.map((choix, index) => {
            return (
              <div key={index} className="timeline__choice">
                <div className="timeline__text">
                  <p> {choix.text}</p>
                </div>
                <div
                  className={
                    index < count
                      ? "timeline__number__green"
                      : "timeline__number"
                  }
                  onClick={countBack}
                >
                  <p>{choix.choice}</p>
                </div>
              </div>
            );
          })}
        </div>
        {count === 1 ? (
          <div className="choice__contain">
            <div className="choice__box">
              <div className="contain__insideboxdevis1">
                <p>Choix 1</p>
              </div>
              <div className="contain__insideboxdevis2">
                <p> Voici mon volume</p>
              </div>
              <div className="contain__insideboxdevis3">
                <p className="devis__textvolume">
                  Entrez ci-dessous la valeur de votre volume
                </p>
                <div className="contain__devisinput">
                  <input
                    type="number"
                    onChange={(e) => {
                      setVolumeCalcul(e.target.value);
                    }}
                  />
                  <p>
                    m <sup>3</sup>
                  </p>
                  <button
                    className={
                      show ? "choice__buttonleft" : "choice__buttonnone"
                    }
                    onClick={() => setCount(count + 1)}
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
            <div className="choice__box" onClick={() => setCount(count + 1)}>
              <div className="contain__insideboxdevis1">
                <p>Choix 2</p>
              </div>
              <div className="contain__insideboxdevis2">
                <p> Voici mon volume</p>
                <br />
                <p style={{ fontSize: "1em" }}>En ajoutant mes meubles </p>
              </div>
              <div className="contain__insideboxdevis3 insideboxtext"></div>
            </div>
          </div>
        ) : null}
        {count === 2 ? (
          <ChoiceMeuble
            count={count}
            setCount={setCount}
            totalBasket={totalBasket}
            setTotalBasket={setTotalBasket}
            volumeCalcul={volumeCalcul}
            testCalcul={testCalcul}
            testCalcul2={testCalcul2}
            volumeHeavy={volumeHeavy}
            totalHeavy={totalHeavy}
            setTotalHeavy={setTotalHeavy}
          />
        ) : null}
        {count === 3 ? (
          <StartAddress
            totalBasket={totalBasket}
            volumeCalcul={volumeCalcul}
            count={count}
            setCount={setCount}
            stair={stair}
            setStair={setStair}
            lift={lift}
            setLift={setLift}
            portage={portage}
            setPortage={setPortage}
            accessTruck={accessTruck}
            setAccesTruck={setAccesTruck}
            address={address}
            setAdress={setAdress}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            handleSelect={handleSelect}
            portageTotalStart={portageTotalStart}
            setPortageTotalStart={setPortageTotalStart}
          />
        ) : null}
        {count === 4 ? (
          <EndAdressGood
            totalBasket={totalBasket}
            volumeCalcul={volumeCalcul}
            portageTotalEnd={portageTotalEnd}
            setPortageTotalEnd={setPortageTotalEnd}
            count={count}
            setCount={setCount}
            handleSelect={handleSelect}
            cityEnd={cityEnd}
            setCityEnd={setCityEnd}
            stairEnd={stairEnd}
            setStairEnd={setStairEnd}
            liftEnd={liftEnd}
            setLiftEnd={setLiftEnd}
            portageEnd={portageEnd}
            setPortageEnd={setPortageEnd}
            accessTruckEnd={accessTruckEnd}
            setAccesTruckEnd={setAccesTruckEnd}
            handleSelectEnd={handleSelectEnd}
            coordinatesEnd={coordinatesEnd}
            setCoordinatesEnd={setCoordinatesEnd}
          />
        ) : null}
        <div>
          {count === 5 ? (
            <Tarif
              quantityRecapTotal={quantityRecapTotal}
              setQuantityRecapTotal={setQuantityRecapTotal}
              totalQuantityRecap={totalQuantityRecap}
              kiloDistance={kiloDistance}
              portageGeneraleTotal={portageGeneraleTotal}
              totalBasket={totalBasket}
              volumeCalcul={volumeCalcul}
              totalFormule={totalFormule}
              setTotalFormule={setTotalFormule}
              date={date}
              setDate={setDate}
              endDate={endDate}
              setEndDate={setEndDate}
              count={count}
              setCount={setCount}
              setToggleBloks={setToggleBloks}
              toggleBlocks={toggleBlocks}
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
              totalTest={totalTest}
              totalQuantityV2={totalQuantityV2}
              setTotalQuantityV2={setTotalQuantityV2}
            />
          ) : null}
        </div>
        <div>
          {count === 6 ? (
            <Recap
              quantityRecapTotal={quantityRecapTotal}
              totalQuantityRecap={totalQuantityRecap}
              totalFormule={totalFormule}
              totalQuantityV2={totalQuantityV2}
              testCalcul={testCalcul}
              testCalcul2={testCalcul2}
              totalTest={totalTest}
              setTotalQuantity={setTotalQuantity}
              totalQuantity={totalQuantity}
              setToggleBloks={setToggleBloks}
              toggleBlocks={toggleBlocks}
              count={count}
              setCount={setCount}
              addressGO={address}
              stair={stair}
              lift={lift}
              portage={portage}
              accessTruck={accessTruck}
              cityEnd={cityEnd}
              stairEnd={stairEnd}
              liftEnd={liftEnd}
              portageEnd={portageEnd}
              accessTruckEnd={accessTruckEnd}
              coorLat={coorLat}
              coorLng={coorLng}
              coorLatEnd={coorLatEnd}
              coorLngEnd={coorLngEnd}
              totalBasket={totalBasket}
              setTotalBasket={setTotalBasket}
              volumeCalcul={volumeCalcul}
              date={date}
              setDate={setDate}
              endDate={endDate}
              setEndDate={setEndDate}
              coordianateLat={coordianateLat}
              coordianateLong={coordianateLong}
              coordianateLatEnd={coordianateLatEnd}
              coordianateLongEnd={coordianateLongEnd}
              kiloDistance={kiloDistance}
              setKiloDistance={setKiloDistance}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default DevisForm;
