import React from "react";
import DevisForm from "../components/DevisForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Devis() {
  return (
    <div>
      <Header />
      <div className="header__sousHeader"></div>
      <DevisForm />
      <Footer />
    </div>
  );
}

export default Devis;
