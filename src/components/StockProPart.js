import React, { useState } from "react";

export const StockProPart = () => {
  const [view, setView] = useState(false);

  return (
    <div className="pack__contain2">
      <div className="pack pack__height2">
        <h3 className="pack__title">
          Professionnel
          <br />
        </h3>
        <div
          className="pack__price testprice"
          onMouseEnter={() => setView(true)}
          onMouseLeave={() => setView(false)}
        >
          {view ? (
            <div className="stockage__hidden">
              <div className="palette">
                <p>0.45€ </p>
                <p> jusqu'a 10 palettes</p>
              </div>
              <div className="palette">
                <p>0.35€</p>
                <p>de 11 à 100 palettes</p>
              </div>
              <div className="palette">
                <p>0.25€</p>
                <p> à partir de 100 palettes</p>
              </div>
            </div>
          ) : (
            <div className="profesionelle">
              <h2>A partir de 0,25€ la palette europe/jour </h2>
              <p>Coup de fourche entré/sortie 3€</p>
              <h5>*Prix variable selon la quantité du stock</h5>
            </div>
          )}
        </div>
      </div>
      <div className="pack pack__height2">
        <h3 className="pack__title">
          Particulier
          <br />
        </h3>

        <div className="pack__price testprice">
          <h2>
            {" "}
            A partir de <br />
            15€ le m<sup>2</sup> /mois{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};
