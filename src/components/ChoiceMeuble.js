import React, { useState } from "react";
import Basket from "./Basket";
import HeavyObjet from "./HeavyObjet";

function ChoiceMeuble({ count, setCount }) {
  const [toggleTabs, setToggleTabs] = useState(1);
  // const [addCount, setAddCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [showSide, setShowSide] = useState(false);

  console.log("produit >>>>", products);
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + Number(products[i].volume) * products[i].quantity;
  }

  let buanderie = [
    { name: "Aspirateur", volume: 0.06, quantity: "1", id: "3467j6789275" },
    {
      name: "Banc de rangement",
      volume: 0.18,
      quantity: "1",
      id: "34565678685l3443",
    },
    { name: "Lave Linge", volume: 0.33, quantity: "1", id: "56575754243m" },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "2335567834r",
    },
    {
      name: "Panière à linge",
      volume: 0.12,
      quantity: "1",
      id: "354646311323f",
    },
    { name: "Sèche linge", volume: 0.3, quantity: "1", id: "5757342435ty55" },
    {
      name: "Table de repassage",
      volume: 0.02,
      quantity: "1",
      id: "77633456789r45",
    },
    { name: "Tabouret", volume: 0.05, quantity: "1", id: "134676768p" },
  ];

  let bureau = [
    { name: "Armoire 2portes", volume: 1.03, quantity: "1", id: "2578996" },
    { name: "Blibliothèque", volume: 0.78, quantity: "1", id: "34578" },
    { name: "Bureau ancien", volume: 0.64, quantity: "1", id: "6788334" },
    { name: "Bureau enfant", volume: 0.54, quantity: "1", id: "567788875" },
    { name: "Casier de bureau", volume: 0.2, quantity: "1", id: "445677886" },
    { name: "Chaise de bureau", volume: 0.31, quantity: "1", id: "4467753333" },
    { name: "Clic-clac", volume: 1.85, quantity: "1", id: "456778" },
    {
      name: "etagère - Bibliothèque",
      volume: 0.51,
      quantity: "1",
      id: "23R4656574",
    },
    { name: "Fauteuil de bureau", volume: 0.44, quantity: "1", id: "46436636" },
    { name: "Lampe de bureau", volume: 0.01, quantity: "1", id: "53454564574" },
    { name: "Lampe sur pied", volume: 0.14, quantity: "1", id: "535434525" },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "434656457474",
    },
  ];
  let cartons = [
    { name: "Carton classique", volume: 0.06, quantity: "1", id: "5667888444" },
    { name: "Carton livres", volume: 0.03, quantity: "1", id: "34578899922F" },
  ];
  let chambre = [
    { name: "Armoire 2 portes", volume: 1.03, quantity: "1", id: "8844455" },
    { name: "Armoire dressing", volume: 2, quantity: "1", id: "22200444" },
    { name: "Bibliothèque", volume: 0.78, quantity: "1", id: "5757573883" },
    { name: "Bureau enfant", volume: 0.54, quantity: "1", id: "959595950" },
    { name: "Chaise de bureau", volume: 0.31, quantity: "1", id: "3737484" },
    { name: "Clic-clac", volume: 1.85, quantity: "1", id: "38384857" },
    { name: "Commode", volume: 0.31, quantity: "1", id: "09995844" },
    {
      name: "etagère - Bibliothèque",
      volume: 0.51,
      quantity: "1",
      id: "77575723HH",
    },
    {
      name: "Lampe sur pied",
      volume: 0.14,
      quantity: "1",
      id: "75858847373BD",
    },
    { name: "Malle de rangement", volume: 0.21, quantity: "1", id: "" },

    { name: "Lit bébé", volume: 0.93, quantity: "1", id: "383727238T" },
    { name: "Lit double", volume: 2.51, quantity: "1", id: "9812949595I" },
    {
      name: "Lit simple",
      volume: 1.62,
      quantity: "1",
      id: "8999233233PPPRR55",
    },
    { name: "Matelas double", volume: 0.64, quantity: "1", id: "4949494UUU" },
    {
      name: "Matelas lit bébé",
      volume: 0.02,
      quantity: "1",
      id: "UU555223245",
    },
    { name: "Matelas simple", volume: 0.36, quantity: "1", id: "TYUUUBB28755" },
    { name: "Pouf", volume: 0.04, quantity: "1", id: "JU879002" },
    { name: "Table de chevet", volume: 0.07, quantity: "1", id: "NI587378" },
    { name: "Tabouret", volume: 0.05, quantity: "1", id: "OR85895" },
    {
      name: "Télévision 32 pouces",
      volume: 0.03,
      quantity: "1",
      id: "WE199833",
    },
  ];
  let cuisine = [
    { name: "Bahut", volume: 0.79, quantity: "1", id: "WE98764664" },
    { name: "Buffet cuisine", volume: 0.57, quantity: "1", id: "MB9348857" },
    { name: "Chaise", volume: 0.29, quantity: "1", id: "BO1897434" },
    {
      name: "Chaise haute bébé",
      volume: 0.14,
      quantity: "1",
      id: "PA17011987",
    },
    { name: "Congélateur", volume: 0.71, quantity: "1", id: "MB47823" },
    { name: "Four", volume: 0.21, quantity: "1", id: "AY3784994" },
    { name: "Four micro-onde", volume: 0.07, quantity: "1", id: "A0099887" },
    { name: "Frigo américain", volume: 1.13, quantity: "1", id: "NG38759" },
    { name: "Gazinière", volume: 0.31, quantity: "1", id: "NA783939393" },
    { name: "Hotte", volume: 0.3, quantity: "1", id: "NG87323334" },
    { name: "Lave vaisselle", volume: 0.31, quantity: "1", id: "KU9874455" },
    {
      name: "Plante artificielle",
      volume: 0.09,
      quantity: "1",
      id: "MA198457",
    },
    {
      name: "Poubelle de cuisine",
      volume: 0.06,
      quantity: "1",
      id: "LO9875573",
    },
    { name: "Réfrigérateur", volume: 0.73, quantity: "1", id: "NG98464675O" },
    { name: "Table de cuisine", volume: 0.72, quantity: "1", id: "O3748585" },
    { name: "Tabouret de bar", volume: 0.15, quantity: "1", id: "O84757593" },
  ];
  let entree = [
    { name: "Banc d'entrée", volume: 0.21, quantity: "1", id: "1" },
    { name: "Console d'entrée", volume: 0.49, quantity: "1", id: "2" },
    { name: "Port Manteaux", volume: 0.02, quantity: "1", id: "3" },
  ];
  let garage = [
    {
      name: "Aspirateur de chantier",
      volume: 0.11,
      quantity: "1",
      id: "575757",
    },
    { name: "Banc de rangement", volume: 0.18, quantity: "1", id: "100948" },
    { name: "Caisse à outils", volume: 0.03, quantity: "1", id: "757575" },
    { name: "Congelateur", volume: 0.71, quantity: "1", id: "38383" },
    { name: "Echelle", volume: 0.11, quantity: "1", id: "38383H" },
    { name: "etabli", volume: 0.86, quantity: "1", id: "2299II" },
    { name: "etagères", volume: 0.74, quantity: "1", id: "78654TY" },
    { name: "Grand barbecue", volume: 1.41, quantity: "1", id: "198HJU4" },
    { name: "lave Linge", volume: 0.33, quantity: "1", id: "17171288R" },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "0111001BIN",
    },
    {
      name: "Meuble chaussures",
      volume: 0.25,
      quantity: "1",
      id: "39393847UU",
    },
    {
      name: "Nettoyeur haute pression",
      volume: 0.07,
      quantity: "1",
      id: "HUGUGUZZ22203",
    },
    { name: "Petit barbecue", volume: 0.08, quantity: "1", id: "1919283747" },
    { name: "Poubelle de tri", volume: 0.11, quantity: "1", id: "778484848TU" },
    { name: "Sèche linge", volume: 0.3, quantity: "1", id: "101928474848UU" },
    {
      name: "Tondeuse à gazon",
      volume: 0.52,
      quantity: "1",
      id: "BUBUB377484",
    },
    { name: "Valise", volume: 0.08, quantity: "1", id: "LOL1918737" },
    { name: "Vélo adulte", volume: 1.26, quantity: "1", id: "BUT485858" },
    { name: "Vélo enfant", volume: 0.17, quantity: "1", id: "FI9378484" },
    { name: "Ventilateur", volume: 0.17, quantity: "1", id: "IB98834" },
  ];
  let jardin = [
    { name: "Chaise de jardin", volume: 0.29, quantity: "1", id: "BI48485858" },
    {
      name: "Parasol de jardin",
      volume: 0.08,
      quantity: "1",
      id: "AET8383823",
    },
    { name: "Salon de jardin", volume: 1.34, quantity: "1", id: "LOG93838832" },
    { name: "Table de jardin", volume: 1.5, quantity: "1", id: "IU57848" },
    {
      name: "Tondeuse à gazon",
      volume: 0.52,
      quantity: "1",
      id: "GOGO93838282",
    },
    { name: "Transat", volume: 0.01, quantity: "1", id: "TUNEEE3838484" },
  ];
  let salleDeBain = [
    { name: "Baignoire bébé", volume: 0.13, quantity: "1", id: "28347UU" },
    {
      name: "Colonne salle de bain",
      volume: 0.16,
      quantity: "1",
      id: "198383IL",
    },
    { name: "Meuble lavabo", volume: 0.34, quantity: "1", id: "TL38484995" },
    {
      name: "Miroir rangement",
      volume: 0.05,
      quantity: "1",
      id: "1783884ILEO",
    },
    { name: "Panière à linge", volume: 0.12, quantity: "1", id: "785859UITTT" },
  ];
  let salon = [
    { name: "Bibliothèque", volume: 0.78, quantity: "1", id: "ETYINECR78" },
    {
      name: "Billard - 300 kgs",
      volume: 2.39,
      quantity: "1",
      id: "EZIUVHIRUE89",
    },
    { name: "Buffet", volume: 0.84, quantity: "1", id: "BUVRBV477575" },
    { name: "Canapé 2 places", volume: 1.41, quantity: "1", id: "NRIUNI89944" },
    { name: "Canapé 3 places", volume: 1.91, quantity: "1", id: "UHRIEH234" },
    {
      name: "Canapé d'angle",
      volume: 2.84,
      quantity: "1",
      id: "RNVIRVNI484848",
    },
    {
      name: "Chaise salle à manger",
      volume: 0.25,
      quantity: "1",
      id: "IRVINEUVN38383",
    },
    { name: "Coffre-fort - 300 kgs", volume: 0.14, quantity: "1", id: "OOZOZ" },
    {
      name: "étagère - Bibliothèque",
      volume: 0.51,
      quantity: "1",
      id: "UTUTIJ47859",
    },
    { name: "Fauteuil club", volume: 0.74, quantity: "1", id: "8284885UTIK" },
    {
      name: "Fauteuil de salon",
      volume: 0.86,
      quantity: "1",
      id: "RNVIRHVI889944",
    },
    {
      name: "Grande table basse",
      volume: 0.33,
      quantity: "1",
      id: "NVIERBVIE193939",
    },
    { name: "Lampe de salon", volume: 0.08, quantity: "1", id: "IVNIVN" },
    {
      name: "Lampe sur pied",
      volume: 0.14,
      quantity: "1",
      id: "OVRNRUNRE84938",
    },
    { name: "Méridienne", volume: 1.28, quantity: "1", id: "VNEIRVN4937RVH" },
    {
      name: "Meuble télévision",
      volume: 0.42,
      quantity: "1",
      id: "NTIBNTIB88349",
    },
    {
      name: "Meuble vitrine",
      volume: 0.84,
      quantity: "1",
      id: "IRENVIREVN98384",
    },
    { name: "Piano -300 kgs", volume: 1.13, quantity: "1", id: "ENRVIREBN33Z" },
    {
      name: "Plante artificielle",
      volume: 0.09,
      quantity: "1",
      id: "PAFJRO48959",
    },
    { name: "Pouf", volume: 0.04, quantity: "1", id: "RNIEH848404" },
    { name: "Table basse", volume: 0.1, quantity: "1", id: "RHBITEBI23R45" },
    {
      name: "Table de salle à manger",
      volume: 1.15,
      quantity: "1",
      id: "RINIEVNEIR484884",
    },
    { name: "Table gigogne", volume: 0.12, quantity: "1", id: "IUNICNI484849" },
    {
      name: "Télévision 32 pouces",
      volume: 0.03,
      quantity: "1",
      id: "I23UH4F94H94",
    },
    {
      name: "Télévision grand ecran",
      volume: 0.13,
      quantity: "1",
      id: "93N4HV9H9",
    },
    { name: "Vaisselier", volume: 1.27, quantity: "1", id: "49H3HV84B493VB93" },
  ];

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  // const showBlock = () => setShowSide(true);

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
              {buanderie.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie
                      setShowSide(true);
                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
                    <div></div>
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
            <div
              style={{
                border: "1px solid blue",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {bureau.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {cartons.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {chambre.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {cuisine.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {entree.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {garage.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {jardin.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {salleDeBain.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
              {salon.map((meuble, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      //créer une copie

                      const newProduct = [...products];
                      let isFound = false;
                      for (let i = 0; i < products.length; i++) {
                        if (products[i].id === meuble.id) {
                          newProduct[i].quantity++;
                          isFound = true;
                          break;
                        }
                      }
                      if (isFound === false) {
                        //modifier la copie
                        newProduct.push({
                          name: meuble.name,
                          volume: meuble.volume,
                          quantity: "1",
                          id: meuble.id,
                        });
                      }

                      //mettre à jour le state

                      setProducts(newProduct);
                    }}
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <HeavyObjet />
      <div className="btn2">
        <button style={{ height: "" }} onClick={() => setCount(count - 1)}>
          PREVIOUS
        </button>

        <button onClick={() => setCount(count + 1)}>NEXT</button>
      </div>
      <div style={{ display: "none" }}>
        <Basket
          products={products}
          setProducts={setProducts}
          total={total}
          showSide={showSide}
        />
      </div>
      <div className={showSide ? "panier__contain" : "panier__none"}>
        <div className="panier__meuble">
          <h1>Panier</h1>

          <div className="panier__listeblock">
            {products.map((product, idx) => {
              return (
                <div className="panier__liste">
                  <button
                    onClick={() => {
                      const newProduct = [...products];

                      if (newProduct[idx].quantity === 1) {
                        newProduct.splice(idx, 1);
                      } else {
                        newProduct[idx].quantity--;
                      }
                      setProducts(newProduct);
                    }}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => {
                      const newProduct = [...products];
                      newProduct[idx].quantity++;
                      setProducts(newProduct);
                    }}
                  >
                    +
                  </button>
                  {product.name}
                </div>
              );
            })}
          </div>
          <div className="panier__volumeblock">
            <p className="panier__volume">Volume: {total.toFixed(2)} m3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceMeuble;
