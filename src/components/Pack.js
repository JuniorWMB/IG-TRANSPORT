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
            Services de logistique avec possibilité de livraison, préparation
            des commandes et stockage de palettes. Nous répondons toutes vos
            demandes.
          </p>
        </div>
      </Link>
      <div className="pack">
        <div className="pack__logo">
          <Truck size={40} color="#94c935" />
          <p> Transport</p>
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
        <div className="pack__logo">
          <Archive size={40} color="#94c935" />
          <p> Stockage</p>
        </div>
        <div className="pack__textprof">
          <p>
            Nous proposons une large sélection de produits indispensable pour
            votre déménagement (cartons, adhesifs, housses etc...).
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
      <div className="pack">
        <div className="pack__logo">
          <Briefcase size={40} color="#94c935" />
          <p> Box Mobile</p>
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
