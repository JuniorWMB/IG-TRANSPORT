import React from "react";
import ByProducts from "../components/ByProducts";
import Header from "../components/Header";

import adhesif from "../assets/adhesif.jpg";
import assiette from "../assets/assiette.jpg";
import bouteille from "../assets/bouteille.jpg";
import houssebleu from "../assets/houssebleu.jpg";
import houssered from "../assets/houssered.jpg";
import housseturq from "../assets/housseturq.jpg";
import livre from "../assets/livre.jpg";
import pendrie from "../assets/pendrie.jpg";
import standard from "../assets/standar.jpg";
// import tringle from "../assets/tringle.jpg";
// import vaisselle from "../assets/vaisselle.jpg";
import verre from "../assets/verre.jpg";

const dataPrice = [
  {
    image: adhesif,
    description: "Adhesif PVC blanc 48mm x 66ml",
    price: "2,99",
  },
  {
    image: assiette,
    description: "Carton déménagement 24 à 48 assiettes BARREL",
    price: "12,90",
  },
  {
    image: bouteille,
    description: "Carton déménagement Bouteilles",
    price: "2,90",
  },
  {
    image: houssebleu,
    description: "Housse matelas Bleu 2 personnes polyethylene 160",
    price: "4,70",
  },
  {
    image: housseturq,
    description: "Housse matelas Turquoise 1 personne polyethylene ",
    price: "3,50",
  },
  {
    image: houssered,
    description: "Housse matelas Rose King Size",
    price: "6,00",
  },
  {
    image: livre,
    description: "Carton déménagement Objets lourds ",
    price: "1,50",
  },
  {
    image: pendrie,
    description: "Carton déménagement penderie",
    price: "10,00",
  },
  {
    image: standard,
    description: "Carton déménagement Standard renforce",
    price: "1,99",
  },
  {
    image: verre,
    description: "Carton déménagement 75 verres BARREL",
    price: "10,90",
  },
];

function Products() {
  return (
    <div>
      <Header />
      <div className="header__sousHeader"></div>
      <ByProducts dataPrice={dataPrice} />
    </div>
  );
}

export default Products;
