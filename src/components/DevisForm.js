import React, { useState } from "react";
import ChoiceMeuble from "../components/ChoiceMeuble";
// import ToastVolume from "./ToastVolume";
// import choiceMeuble from "../components/ChoiceMeuble";
import startForm from "../components/startAddress";
let timeline = [
  { choice: "1", text: "calculateur" },
  { choice: "2", text: "Volume total éstimé" },
  { choice: "3", text: "votre adresse de depart" },
  { choice: "4", text: "votre adresse d'arrivée" },
  { choice: "5", text: "tarif" },
  { choice: "6", text: "récapitulatif" },
];

function DevisForm() {
  // const [viewChoice, setViewChoice] = useState(false);
  const [count, setCount] = useState(1);
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
                  <input type="text" />
                  <p>
                    m <sup>3</sup>
                  </p>
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
          <div className="contain__startadress">
            <div>{/* <h2>Votre adresse de départ</h2> */}</div>
            <form action="" className="contain__formadressstart">
              <div className="city start">
                <p>Ville :</p>
                <input type="text" />
              </div>
              <div className="stage start">
                <p>etage :</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div className="lift start">
                <p>Ascenseur :</p>
                <select name="" id="">
                  <option value="">Oui</option>
                  <option value="">Non</option>
                </select>
              </div>
              <div className="distance__portage start">
                <p>Distance de portage :</p>
                <select name="" id="">
                  <option value="">Moins de 15m</option>
                  <option value="">De 15m à 29m</option>
                  <option value="">De 30m à 39m</option>
                  <option value="">De 40m à 49m</option>
                  <option value="">De 50m à 59m</option>
                  <option value="">De 60m à 79m</option>
                  <option value="">De 80m à 100m</option>
                </select>
              </div>
              <div className="start">
                <p>Accessibilité camion 19T</p>
                <select name="" id="">
                  <option value="">Possible</option>
                  <option value="">Difficile</option>
                </select>
              </div>
              <div className="btn">
                <button onClick={() => setCount(count - 1)}>back</button>
                <button onClick={() => setCount(count + 1)}>previous</button>
              </div>
            </form>
          </div>
        ) : null}
        {count === 4 ? (
          <div className="contain__startadress">
            <div>{/* <h2>Votre adresse de départ</h2> */}</div>
            <form action="" className="contain__formadressstart">
              <div className="city start">
                <p>Villes :</p>
                <input type="text" />
              </div>
              <div className="stage start">
                <p>etage :</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div className="lift start">
                <p>Ascenseur :</p>
                <select name="" id="">
                  <option value="">Oui</option>
                  <option value="">Non</option>
                </select>
              </div>
              <div className="distance__portage start">
                <p>Distance de portage :</p>
                <select name="" id="">
                  <option value="">Moins de 15m</option>
                  <option value="">De 15m à 29m</option>
                  <option value="">De 30m à 39m</option>
                  <option value="">De 40m à 49m</option>
                  <option value="">De 50m à 59m</option>
                  <option value="">De 60m à 79m</option>
                  <option value="">De 80m à 100m</option>
                </select>
              </div>
              <div className="start">
                <p>Accessibilité camion 19T</p>
                <select name="" id="">
                  <option value="">Possible</option>
                  <option value="">Difficile</option>
                </select>
              </div>
              <div className="btn">
                <button onClick={() => setCount(count - 1)}>back</button>
                <button onClick={() => setCount(count + 1)}>previous</button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default DevisForm;
