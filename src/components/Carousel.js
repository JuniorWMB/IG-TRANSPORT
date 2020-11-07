import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

// const proprietes = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrow: true,
// };

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Carousel() {
  return (
    <div className="containerSlide">
      <CarouselMulti responsive={responsive}>
        {dataImg.map((dat, index) => {
          return (
            <div className="slide__cardoffer">
              <img src={dat.img} alt={dat.description} />
              <div className="slide__cardprice">
                <p>{dat.description}</p>
                <button>{dat.price}</button>
              </div>
            </div>
          );
        })}

        {/* <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div> */}
      </CarouselMulti>
    </div>
  );
}

export default Carousel;
