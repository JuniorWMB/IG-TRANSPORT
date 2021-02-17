import React, { useState } from "react";

const HeavyObjet = () => {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div className="heavy__contain">
      <div className="heavy__check">
        <p>Avez vous des objets extrémement lourd ?</p>
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
      {showHeavy ? (
        <div className="heavy__block__contain">
          <div className="heavy__block">
            <div className="heavy__imgtext">
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
          <div className="heavy__block">
            <div className="heavy__imgtext">
              <img src="" alt="" />
            </div>
          </div>
          <div className="heavy__block">
            <div className="heavy__imgtext">
              <img src="" alt="" />
            </div>
          </div>
          <div className="heavy__block">
            <div className="heavy__imgtext">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeavyObjet;
