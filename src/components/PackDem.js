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
      <div className="pack pack__height">
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
          <button className="pack__buttongreen">Réservation</button>
        </Link>
      </div>

      <div className="pack pack__height">
        <h3 className="pack__title">
          Sécurité
          <br />
        </h3>
        <h3 className="pack__price">35€/m3</h3>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon
          icon={faUserShield}
          style={{ color: "#94c935", fontSize: "50px" }}
        />
        <h5 className="text__pack text__test">
          Cette formule comprend: <br />
          ● Livraison à votre domicile des cartons suivant par tranche de 10m3:
          <br />
          20 cartons standards, 20 cartons livres, 1 carton penderie, 2 rouleau
          de scotch pvc blanc, emballage de votre vaisselle et objet fragile
          puis déballage a la livraison <br />
          ● Mise sous housse de vos matelas et sommier protection des meubles,
          fauteuil, canapé, électroménager <br />● Démontages et remontage de
          vos meubles.
        </h5>
        <Link className="pack__button">
          <button className="pack__buttongreen">Réservation</button>
        </Link>
      </div>

      <div className="pack pack__height">
        <h3 className="pack__title ">
          Premium
          <br />
        </h3>
        <h3 className="pack__price">60€/m3</h3>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon
          icon={faGem}
          style={{ color: "#94c935", fontSize: "50px" }}
        />
        <h5 className="text__pack text__test">
          Avec cette formule les déménageurs s'occupe de tout . <br />
          ● L' emballages et le déballages de tout vos cartons.
          <br />
          ● Le démontages et remontage de tout vos meubles. <br />● Tout vos
          branchement d'appareillages électriques et électro-ménager.
        </h5>
        <Link className="pack__button">
          <button className="pack__buttongreen">Réservation</button>
        </Link>
      </div>
      {/* <div className="pack">
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
      </div> */}
    </div>
  );
};
