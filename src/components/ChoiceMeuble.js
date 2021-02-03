import React, { useState } from "react";

function ChoiceMeuble({ count, setCount }) {
  const [toggleTabs, setToggleTabs] = useState(1);
  const [addCount, setAddCount] = useState(0);
  const [volume, setVolume] = useState([
    {
      name: "Aspirateur",
      volume: 0.06,
    },
  ]);

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

  let bureau = [
    { name: "Armoire 2portes", volume: 1.03 },
    { name: "Blibliothèque", volume: 0.78 },
    { name: "Bureau ancien", volume: 0.64 },
    { name: "Bureau enfant", volume: 0.54 },
    { name: "Casier de bureau", volume: 0.2 },
    { name: "Chaise de bureau", volume: 0.31 },
    { name: "Clic-clac", volume: 1.85 },
    { name: "etagère - Bibliothèque", volume: 0.51 },
    { name: "Fauteuil de bureau", volume: 0.44 },
    { name: "Lampe de bureau", volume: 0.01 },
    { name: "Lampe sur pied", volume: 0.14 },
    { name: "Malle de rangement", volume: 0.21 },
  ];
  let cartons = [
    { name: "Carton classique", volume: 0.06 },
    { name: "Carton livres", volume: 0.03 },
  ];
  let chambre = [
    { name: "Armoire 2 portes", volume: 1.03 },
    { name: "Armoire dressing", volume: 2 },
    { name: "Bibliothèque", volume: 0.78 },
    { name: "Bureau enfant", volume: 0.54 },
    { name: "Chaise de bureau", volume: 0.31 },
    { name: "Clic-clac", volume: 1.85 },
    { name: "Commode", volume: 0.31 },
    { name: "etagère - Bibliothèque", volume: 0.51 },
    { name: "Lampe sur pied", volume: 0.14 },
    { name: "Malle de rangement", volume: 0.21 },

    { name: "Lit bébé", volume: 0.93 },
    { name: "Lit double", volume: 2.51 },
    { name: "Lit simple", volume: 1.62 },
    { name: "Matelas double", volume: 0.64 },
    { name: "Matelas lit bébé", volume: 0.02 },
    { name: "Matelas simple", volume: 0.36 },
    { name: "Pouf", volume: 0.04 },
    { name: "Table de chevet", volume: 0.07 },
    { name: "Tabouret", volume: 0.05 },
    { name: "Télévision 32 pouces", volume: 0.03 },
  ];
  let cuisine = [
    { name: "Bahut", volume: 0.79 },
    { name: "Buffet cuisine", volume: 0.57 },
    { name: "Chaise", volume: 0.29 },
    { name: "Chaise haute bébé", volume: 0.14 },
    { name: "Congélateur", volume: 0.71 },
    { name: "Four", volume: 0.21 },
    { name: "Four micro-onde", volume: 0.07 },
    { name: "Frigo américain", volume: 1.13 },
    { name: "Gazinière", volume: 0.31 },
    { name: "Hotte", volume: 0.3 },
    { name: "Lave vaisselle", volume: 0.31 },
    { name: "Plante artificielle", volume: 0.09 },
    { name: "Poubelle de cuisine", volume: 0.06 },
    { name: "Réfrigérateur", volume: 0.73 },
    { name: "Table de cuisine", volume: 0.72 },
    { name: "Tabouret de bar", volume: 0.15 },
  ];
  let entree = [
    { name: "Banc d'entrée", volume: 0.21 },
    { name: "Console d'entrée", volume: 0.49 },
    { name: "Port Manteaux", volume: 0.02 },
  ];
  let garage = [
    { name: "Aspirateur de chantier", volume: 0.11 },
    { name: "Banc de rangement", volume: 0.18 },
    { name: "Caisse à outils", volume: 0.03 },
    { name: "Congelateur", volume: 0.71 },
    { name: "Echelle", volume: 0.11 },
    { name: "etabli", volume: 0.86 },
    { name: "etagères", volume: 0.74 },
    { name: "Grand barbecue", volume: 1.41 },
    { name: "lave Linge", volume: 0.33 },
    { name: "Malle de rangement", volume: 0.21 },
    { name: "Meuble chaussures", volume: 0.25 },
    { name: "Nettoyeur haute pression", volume: 0.07 },
    { name: "Petit barbecue", volume: 0.08 },
    { name: "Poubelle de tri", volume: 0.11 },
    { name: "Sèche linge", volume: 0.3 },
    { name: "Tondeuse à gazon", volume: 0.52 },
    { name: "Valise", volume: 0.08 },
    { name: "Vélo adulte", volume: 1.26 },
    { name: "Vélo enfant", volume: 0.17 },
    { name: "Ventilateur", volume: 0.17 },
  ];
  let jardin = [
    { name: "Chaise de jardin", volume: 0.29 },
    { name: "Parasol de jardin", volume: 0.08 },
    { name: "Salon de jardin", volume: 1.34 },
    { name: "Table de jardin", volume: 1.5 },
    { name: "Tondeuse à gazon", volume: 0.52 },
    { name: "Transat", volume: 0.01 },
  ];
  let salleDeBain = [
    { name: "Baignoire bébé", volume: 0.13 },
    { name: "Colonne salle de bain", volume: 0.16 },
    { name: "Meuble lavabo", volume: 0.34 },
    { name: "Miroir rangement", volume: 0.05 },
    { name: "Panière à linge", volume: 0.12 },
  ];
  let salon = [
    { name: "Bibliothèque", volume: 0.78 },
    { name: "Billard - 300 kgs", volume: 2.39 },
    { name: "Buffet", volume: 0.84 },
    { name: "Canapé 2 places", volume: 1.41 },
    { name: "Canapé 3 places", volume: 1.91 },
    { name: "Canapé d'angle", volume: 2.84 },
    { name: "Chaise salle à manger", volume: 0.25 },
    { name: "Coffre-fort - 300 kgs", volume: 0.14 },
    { name: "étagère - Bibliothèque", volume: 0.51 },
    { name: "Fauteuil club", volume: 0.74 },
    { name: "Fauteuil de salon", volume: 0.86 },
    { name: "Grande table basse", volume: 0.33 },
    { name: "Lampe de salon", volume: 0.08 },
    { name: "Lampe sur pied", volume: 0.14 },
    { name: "Méridienne", volume: 1.28 },
    { name: "Meuble télévision", volume: 0.42 },
    { name: "Meuble vitrine", volume: 0.84 },
    { name: "Piano -300 kgs", volume: 1.13 },
    { name: "Plante artificielle", volume: 0.09 },
    { name: "Pouf", volume: 0.04 },
    { name: "Table basse", volume: 0.1 },
    { name: "Table de salle à manger", volume: 1.15 },
    { name: "Table gigogne", volume: 0.12 },
    { name: "Télévision 32 pouces", volume: 0.03 },
    { name: "Télévision grand ecran", volume: 0.13 },
    { name: "Vaisselier", volume: 1.27 },
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
            className={toggleTabs === 7 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(7)}
          >
            Garage
          </div>
          <div
            className={toggleTabs === 8 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(8)}
          >
            Jardin
          </div>
          <div
            className={toggleTabs === 9 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(9)}
          >
            Salle de Bain
          </div>
          <div
            className={toggleTabs === 10 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(10)}
          >
            Salon
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
          >
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
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
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
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {bureau.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contenu__onglets">
          <div
            className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {cartons.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contenu__onglets">
          <div
            className={toggleTabs === 4 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {chambre.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contenu__onglets">
          <div
            className={toggleTabs === 5 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {cuisine.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 6 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {entree.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 7 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {garage.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 8 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {jardin.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                    }}
                  >
                    <div>
                      <p>{meuble.name}</p>
                    </div>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 9 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salleDeBain.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contenu__onglets">
          <div
            className={toggleTabs === 10 ? "contenu active-contenu" : "contenu"}
          >
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salon.map((meuble) => {
                return (
                  <div
                    style={{
                      border: "1px solid red",
                      display: "flex",
                      flexDirection: "column",
                      height: "225px",
                      width: "225px",
                      margin: "10px",
                    }}
                  >
                    <p>{meuble.name}</p>
                    <div>
                      <button onClick={() => setAddCount(addCount - volume)}>
                        -
                      </button>
                      {addCount}
                      <button onClick={() => setAddCount(addCount + volume)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "10%",
            border: "1px solid black",
            background: "pink",
          }}
        >
          <h1>Panier</h1>
          {/* {volume.map((metre) => {
            return (
              <div>
                <p>{metre.volume} ㎥</p>
              </div>
            );
          })} */}
          <p>{addCount}</p>
        </div>
      </div>
      <div className="btn2">
        <button style={{ height: "" }} onClick={() => setCount(count - 1)}>
          PREVIOUS
        </button>

        <button onClick={() => setCount(count + 1)}>NEXT</button>
      </div>
    </div>
  );
}

export default ChoiceMeuble;
