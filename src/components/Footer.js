import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="link">
        <p>Déménagement</p>
        <p>Transport</p>
        <p>Stockage</p>
        <p>Garde meuble</p>
        <p>Vente de Produit</p>
        <p>Box Mobile</p>
      </nav>
      <div className="info__address">
        <p>Nous sommes ouvert </p>
        <p>du lundi au vendredi</p>
        <p>de 8h30 à 12h</p>
        <p> et de 14h à 18H</p>
        <p> au 16 rue Cantal, 91090 LISSES </p>
        <p>Tel: 06 42 42 42 42</p>
      </div>
      <div className="footer__icon">
        <p>Suivez-nous</p>

        <GrLinkedin size={40} />
        <SiInstagram size={40} />
        <ImFacebook2 size={40} />
        <GrYoutube size={40} />
      </div>
    </footer>
  );
}

export default Footer;
