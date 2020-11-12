import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faPiggyBank,
  faUserShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PackDem = () => {
  return (
    <div className="pack__contain">
      <div className="pack">
        <h3 className="pack__title">
          Eco
          <br />
        </h3>
        <h3 className="pack__price">35€/m3</h3>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon
          icon={faPiggyBank}
          style={{ color: "#94c935", fontSize: "50px" }}
        />
        <h5 className="text__pack">
          Cette formule comprend : <br /> ● La manutention de vos meubles depuis
          votre appartement jusque dans le camion <br /> ● Remise en place de
          votre mobilier dans votre nouveau logement
        </h5>
        <Link className="pack__button">
          <button>Réservation</button>
        </Link>
      </div>
      <div className="pack">
        <p>Sécurité</p>
        <FontAwesomeIcon
          icon={faUserShield}
          style={{ color: "#94c935", fontSize: "50px" }}
        />
      </div>
      <div className="pack">
        <p>Prémium</p>
        <FontAwesomeIcon
          icon={faGem}
          style={{ color: "#94c935", fontSize: "50px" }}
        />
      </div>
    </div>
  );
};
