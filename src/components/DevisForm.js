import React from "react";
import ToastVolume from "./ToastVolume";

let timeline = [
  { choice: "1", text: "calculateur" },
  { choice: "2", text: "Volume total éstimé" },
  { choice: "3", text: "votre adresse de depart" },
  { choice: "4", text: "votre adresse d'arrivée" },
  { choice: "5", text: "tarif" },
  { choice: "6", text: "récapitulatif" },
];

function DevisForm() {
  return (
    <>
      <div className="devis__contain">
        <div className="devis__timeline">
          {timeline.map((choix, index) => {
            return (
              <div className="timeline__choice">
                <div className="timeline__text">
                  <p> {choix.text}</p>
                </div>
                <div className="timeline__number">
                  <p>{choix.choice}</p>
                </div>
              </div>
            );
          })}
        </div>
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
                <input type="text" />
                <p>
                  m <sup>3</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="choice__box">
            <div className="contain__insideboxdevis1">
              <p>Choix 2</p>
            </div>
            <div className="contain__insideboxdevis2">
              <p> Voici mon volume</p>
              {/* <p>En ajoutant mes meubles</p> */}
            </div>
            <div className="contain__insideboxdevis3 insideboxtext"></div>
          </div>
        </div>
        {/* <ToastVolume /> */}
      </div>
    </>
  );
}

export default DevisForm;
