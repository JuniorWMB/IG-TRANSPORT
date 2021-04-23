import React, { useState, useEffect } from "react";

const HeavyObjet = ({
  heavyObject,
  products,
  setProducts,
  volumeHeavy,
  totalHeavy,
  setTotalHeavy,
  setDisable,
}) => {
  const [showHeavy, setShowHeavy] = useState(false);

  for (let i = 0; i < products.length; i++) {
    volumeHeavy =
      volumeHeavy + Number(products[i].volume) * products[i].quantity;
  }
  console.log("heavy", volumeHeavy);

  useEffect(() => {
    setTotalHeavy(volumeHeavy.toFixed(2));
  }, [volumeHeavy, setTotalHeavy]);

  return (
    <div className="heavy__contain">
      <div className="heavy__check">
        <p>Avez vous des objets extrémement lourd ?</p>
        <div className="checkBox">
          <label htmlFor="yes">Oui</label>
          <input
            onClick={() => {
              setShowHeavy(!showHeavy);
            }}
            type="checkbox"
            name="yes"
            id="yes"
          />
        </div>
      </div>
      {showHeavy ? (
        <div className="heavy__block__contain">
          <div className="heavy__block">
            {heavyObject.map((meuble, idx) => {
              return (
                <div
                  className="heavyDiv"
                  key={idx}
                  onClick={() => {
                    //créer une copie
                    // setDisable(true);
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
                    display: "flex",
                    flexDirection: "column",
                    height: "125px",
                    width: "155px",
                    margin: "10px",
                    justifyContent: "space-around",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50px",
                      textAlign: "center",
                    }}
                  >
                    {meuble.name}
                  </p>
                  <img
                    src={meuble.image}
                    alt={meuble.name}
                    width="100"
                    height="100"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeavyObjet;
