import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import adhesif from "../assets/adhesif.jpg";
import assiette from "../assets/assiette.jpg";
import bouteille from "../assets/bouteille.jpg";
import houssebleu from "../assets/houssebleu.jpg";
// import housered from "../assets/houssered.jpg";
import houssered from "../assets/houssered.jpg";
import housseturq from "../assets/housseturq.jpg";
import livre from "../assets/livre.jpg";
import pendrie from "../assets/pendrie.jpg";
import standar from "../assets/standar.jpg";
import tringle from "../assets/tringle.jpg";
import vaisselle from "../assets/vaisselle.jpg";
import verre from "../assets/verre.jpg";

const dataImg = [
  {
    img: adhesif,
    description: "Adhesif PVC Blanc 48 mm x 66 ml",
    price: "2.99€",
  },
  {
    img: assiette,
    description: "Carton déménagement 24 à 48 assiette",
    price: "12.90€",
  },
  { img: bouteille, description: "Carton bouteilles", price: "2.90€" },
  {
    img: houssebleu,
    description: "Housse matelas 2 personnes polyethyle 160",
    price: "4.70€",
  },
  {
    img: houssered,
    description: "Housse matelas King Size rose",
    price: "6.00€",
  },
  {
    img: housseturq,
    description: "Housse matelas 1 personnes polyethyle",
    price: "3.50",
  },
  {
    img: livre,
    description: "Carton déménagement objets lourds",
    price: "1.50€",
  },
  {
    img: pendrie,
    description: "Penderie confection",
    price: "10.00€",
  },
  {
    img: standar,
    description: "Carton standard renforcer",
    price: "1.99€",
  },
  {
    img: tringle,
    description: "tringle ??",
    price: "10.00€",
  },
  {
    img: vaisselle,
    description: "Carton vaisselle ??",
    price: "10.00€",
  },
  {
    img: verre,
    description: "Carton déménagement 75 verres BARREL",
    price: "10.90€",
  },
];

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrow: true,
};

function Carousel() {
  return (
    <div className="containerSlide">
      <Slide {...proprietes} className="test">
        {/* <img src={adhesif} alt="img" />
        <img src={assiette} alt="img" />
        <img src={bouteille} alt="img" /> */}
        {dataImg.map((picture) => (
          <div className="each_slide">
            <img
              className="slide__picture"
              src={picture.adhesif}
              alt={picture.description}
            />
            <button>{picture.price}</button>
          </div>
        ))}

        {/* <div className="each-slide">
          <div>
            <img src={adhesif} alt="img" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={assiette} alt="img" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={bouteille} alt="img" />
          </div>
        </div> */}
      </Slide>
    </div>
  );
}

export default Carousel;
