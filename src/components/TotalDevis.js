import React from "react";

const TotalDevis = () => {
  return (
    <div className="totaldevis__contain">
      <div className="totaldevis__text">
        <p style={{ color: "white" }}>Volume total estimé</p>
        <div>
          <p>0.45</p>
          <p>
            m<sub>3</sub>
          </p>
        </div>
        <button>Valider</button>
      </div>
    </div>
  );
};

export default TotalDevis;
