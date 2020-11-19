import React from "react";
import { Link } from "react-router-dom";
import { Truck, Briefcase, Archive, Package } from "react-feather";
import ReactGA from "react-ga";

function Pack() {
  const handleClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Click to go déménagemtn",
    });
    alert("Click send");
  };

  return (
    <div className="pack__contain">
      <Link onClick={handleClick} to="/demenagement" className="pack">
        <p> Déménagement</p>
        <div className="pack__logo">
          <Package size={40} color="#94c935" />
        </div>
        <div className="pack__textprof">
          <p>
            Services de logistique avec possibilité de livraison, préparation
            des commandes et stockage de palettes. Nous répondons toutes vos
            demandes.
          </p>
        </div>
      </Link>
      <div className="pack">
        <p> Transport</p>
        <div className="pack__logo">
          <Truck size={40} color="#94c935" />
        </div>
        <div className="pack__textprof">
          <p>
            Une offre complète pour vous accompagnez dans votre projet de
            déménagement.
            <br /> Nous proposons 3 formules pour répondre à vos besoins ainsi
            que le stockage de meubles.
          </p>
        </div>
      </div>
      <Link to="/stockage" className="pack">
        <p> Stockage</p>
        <div className="pack__logo">
          <Archive size={40} color="#94c935" />
        </div>
        <div className="pack__textprof">
          <p>
            Nous proposons une large sélection de produits indispensable pour
            votre déménagement (cartons, adhesifs, housses etc...).
          </p>
        </div>
      </Link>
      <div className="pack">
        <p> Garde meuble</p>
        <div className="pack__logo">
          <Briefcase size={40} color="#94c935" />
        </div>
        <div className="pack__textprof">
          <p>
            Nous proposons une large sélection de produits indispensable pour
            votre déménagement (cartons, adhesifs, housses etc...).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pack;
