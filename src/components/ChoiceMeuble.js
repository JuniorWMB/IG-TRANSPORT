import React, { useState } from "react";

function ChoiceMeuble({ count, setCount }) {
  const [toggleTabs, setToggleTabs] = useState(1);

  let buanderie = [
    { name: "Aspirateur", volume: 0.06 },
    { name: "Banc de rangement", volume: 0.18 },
    { name: "Lave Linge", volume: 0.33 },
    { name: "Malle de rangement", volume: 0.21 },
    { name: "Panière à linge", volume: 0.12 },
    { name: "Sèche linge", volume: 0.3 },
    { name: "Table de repassage", volume: 0.02 },
    { name: "Tabouret", volume: 0.05 },
  ];

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="bloc__onglets">
          <div
            className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Buanderie
          </div>
          <div
            className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Bureau
          </div>
          <div
            className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Cartons
          </div>
          <div
            className={toggleTabs === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Chambre
          </div>
          <div
            className={toggleTabs === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Cuisine
          </div>
          <div
            className={toggleTabs === 6 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            Entrée
          </div>
          <div
            className={toggleTabs === 8 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(8)}
          >
            Garage
          </div>
          <div
            className={toggleTabs === 9 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(9)}
          >
            Jardin
          </div>
          <div
            className={toggleTabs === 10 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(10)}
          >
            Salle de Bain
          </div>
          <div
            className={toggleTabs === 11 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(11)}
          >
            Salon
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
          >
            {/* <h2>Contenu 1</h2>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              autem magnam in alias nesciunt magni. Fuga repellendus quidem
              <br />
              impedit obcaecati architecto! Molestias quam quo, provident nemo
              fuga ipsa non quibusdam?
            </p> */}
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {buanderie.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "row",
                      height: "250px",
                      width: "250px",
                      margin: "10px",
                    }}
                  >
                    <p>{meuble.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
          >
            <h2>Contenu 2</h2>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              autem magnam in alias nesciunt magni. Fuga repellendus quidem
              impedit obcaecati architecto! Molestias quam quo, provident nemo
              fuga ipsa non quibusdam?
            </p>
          </div>
        </div>

        <div className="contenu__onglets">
          <div className="contenu">
            <h2>Contenu 3</h2>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              autem magnam in alias nesciunt magni. Fuga repellendus quidem
              impedit obcaecati architecto! Molestias quam quo, provident nemo
              fuga ipsa non quibusdam?
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => setCount(count - 1)}>PREVIOUS</button>
      <br />
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>NEXT</button>
    </div>
  );
}

export default ChoiceMeuble;
