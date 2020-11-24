import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

import "../App.css";

function SousHeader() {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.to("body", 0, { css: { visibility: "visible" } });

    tl.from(".anim1, h3", {
      duration: 1.8,
      y: 100,
      ease: "power4.out",
      delay: 2,
      opacity: 0,
      skewY: 2,
      stagger: {
        amount: 0.3,
      },
    }).from(".sousHeader__button", {
      x: 300,
      ease: "power4.Out",
      delay: 1,
      opacity: 0,
      skewY: 2,
    });
  }, []);
  return (
    <div>
      <div className="header__sousHeader">
        <div className="sousHeader__text">
          <h4 className="anim1">Votre spécialiste du transport</h4>
          <h3 className="anim2">
            Déménagement pour particuliers, solutions logistiques pour les
            professionels et vente de carton et fourniture de déménagement.
          </h3>

          <Link to="/all-products" className="sousHeader__button">
            <p>Vente de cartons </p>
          </Link>
        </div>
        <div className="sousHeader__carouselpric">{/* <Carousel /> */}</div>
      </div>
    </div>
  );
}

export default SousHeader;
