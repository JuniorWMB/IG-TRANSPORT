import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Truck, Briefcase, Archive, Package } from "react-feather";

import Footer from "./Footer";

function Pack() {
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.from(".pack", {
  //     duration: 1.7,
  //     y: 100,
  //     ease: "power4.Out",
  //     delay: 3,
  //     opacity: 0,
  //     stagger: {
  //       amount: 2,
  //     },
  //   });
  // }, []);

  return (
    <div className="pack__contain">
      <Link to="/demenagement" className="pack">
        <div className="pack__logo">
          <Package size={40} color="#94c935" />
          <p> Déménagement</p>
        </div>
        <div className="pack__textprof">
          <p>
            Déménagement de particuliers ou professionnels,débarras,monte
            meuble.
          </p>
        </div>
      </Link>
      <Link to="/transport" className="pack">
        <div className="pack__logo">
          <Truck size={40} color="#94c935" />
          <p> Transport</p>
        </div>
        <div className="pack__textprof">
          <p>
            Courses urgentes, organisateur de transports ,tournées
            régulières,affrètement.
          </p>
        </div>
      </Link>
      <Link to="/stockage" className="pack">
        <div className="pack__logo">
          <Archive size={40} color="#94c935" />
          <p> Stockage</p>
        </div>
        <div className="pack__textprof">
          <p>
            En rack ou au sol dans un entrepôt chauffer et sécuriser. <br />{" "}
            Reception ,Préparation et expédition de vos marchandises.
          </p>
        </div>
      </Link>
      <Link to="/garde-meuble" className="pack">
        <div className="pack__logo">
          <Briefcase size={40} color="#94c935" />
          <p> Garde meuble</p>
        </div>
        <div className="pack__textprof">
          <p>
            Nous proposons une large sélection de produits indispensable pour
            votre déménagement (cartons, adhesifs, housses etc...).
          </p>
        </div>
      </Link>
      <Link to="/all-products" className="pack">
        <div className="pack__logo">
          <Briefcase size={40} color="#94c935" />
          <p> Vente de Produit</p>
        </div>
        <div className="pack__textprof">
          <p>
            Nous proposons une large sélection de produits indispensable pour
            votre déménagement (cartons, adhesifs, housses etc...).
          </p>
        </div>
      </Link>
      <Link to="/box-mobile" className="pack">
        <div className="pack__logo">
          <Briefcase size={40} color="#94c935" />
          <p> Box Mobile</p>
        </div>
        <div className="pack__textprof">
          <p>
            Livraison de votre gardes meubles ,de 4m3 ou 8 m3 ,en bas de chez
            vous avec l'option de chargement par notre équipe de demenageur
            professionnels.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Pack;
