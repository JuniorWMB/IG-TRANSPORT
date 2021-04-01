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

function DevisForm() {
  const [count, setCount] = useState(1);
  const [volumeCalcul, setVolumeCalcul] = useState("");
  const [show, setShow] = useState(false);
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
      console.log("1");
    } else {
      console.log("2");
    }
  }, [volumeCalcul.length]);

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
                    type="text"
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
                    onClick={() => setCount(count + 2)}
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
          <ChoiceMeuble count={count} setCount={setCount} />
        ) : null}
        {count === 3 ? (
          <StartAddress count={count} setCount={setCount} />
        ) : null}
        {count === 4 ? (
          <EndAdressGood count={count} setCount={setCount} />
        ) : null}
        <div>
          {count === 5 ? <Tarif count={count} setCount={setCount} /> : null}
        </div>
        <div>
          {count === 6 ? <Recap count={count} setCount={setCount} /> : null}
        </div>

        {/* <TotalDevis count={count} setCount={setCount} /> */}
      </div>
    </>
  );
}

export default DevisForm;
