import React, { useState } from "react";
import Basket from "./Basket";
import HeavyObjet from "./HeavyObjet";
import aspirateur from "../assets/1-7_Buanderie/1-Aspirateur.svg";
import bancDeRangement from "../assets/1-7_Buanderie/2-banc de rangement.svg";
import laveLinge from "../assets/1-7_Buanderie/3-lave linge.svg";
import meubleChaussures from "../assets/1-7_Buanderie/4-meuble chaussures.svg";
import panierALinge from "../assets/1-7_Buanderie/5-panier a linge.svg";
import secheLinge from "../assets/1-7_Buanderie/6-seche linge.svg";
import tableDeRepassage from "../assets/1-7_Buanderie/7-table de repassage.svg";
import armoireDeuxPorte from "../assets/8-16_Bureau/8-armoire 2 portes.svg";
import bureauAncien from "../assets/8-16_Bureau/9-bureau ancien.svg";
import bureauEnfant from "../assets/8-16_Bureau/10-bureau enfant.svg";
import casierDeBureau from "../assets/8-16_Bureau/11-casier de bureau.svg";
import chaiseDeBureau from "../assets/8-16_Bureau/12-chaise de bureau.svg";
import fauteuilDeBureau from "../assets/8-16_Bureau/14-fauteuil de bureau.svg";
import lampeSurPied from "../assets/8-16_Bureau/15-lampe sur pied.svg";
import tabouret from "../assets/8-16_Bureau/16-tabouret.svg";
import cartonClassique from "../assets/17-18_Carton/17-carton classique.svg";
import cartonLivres from "../assets/17-18_Carton/18-carton livres.svg";
import armoireDressing from "../assets/19-26_Chambre/Armoire dressing.svg";
import bibliotheque from "../assets/19-26_Chambre/bibliotheque.svg";
import litBaby from "../assets/19-26_Chambre/Lit bébé.svg";
import litDouble from "../assets/19-26_Chambre/Lit double.svg";
import litSimple from "../assets/19-26_Chambre/Lit simple.svg";
import matelasBaby from "../assets/19-26_Chambre/Matelas bébé.svg";
import matelasDouble from "../assets/19-26_Chambre/Matelas double.svg";
import matelasSimple from "../assets/19-26_Chambre/Matelas simple.svg";
import buffetCuisine from "../assets/27-37_Cuisine/27-buffet cuisine.svg";
import chaise from "../assets/27-37_Cuisine/28-chaise.svg";
import chaiseHauteBaby from "../assets/27-37_Cuisine/29-chaise haute bebe.svg";
import congelateur from "../assets/27-37_Cuisine/30-congelateur.svg";
import four from "../assets/27-37_Cuisine/31-four.svg";
import fourMicroOndes from "../assets/27-37_Cuisine/32-four a micro-ondes.svg";
import frigoAmericain from "../assets/27-37_Cuisine/33-frigo americain.svg";
import gaziniere from "../assets/27-37_Cuisine/34-gazimiere.svg";
import laveVaisselle from "../assets/27-37_Cuisine/35-lave vaisselle.svg";
import refrigerateur from "../assets/27-37_Cuisine/36-refrigerateur.svg";
import tabouretDeBar from "../assets/27-37_Cuisine/37-tabouret de bar.svg";
import bancEntree from "../assets/38-40_ENTREE/38-banc entree.svg";
import consoleEntree from "../assets/38-40_ENTREE/39-console entree.svg";
import porteManteau from "../assets/38-40_ENTREE/40-porte manteau.svg";
import etageres from "../assets/41-46_Garage/41-etageres.svg";
import grandBbq from "../assets/41-46_Garage/42-grand bbq.svg";
import petitBbq from "../assets/41-46_Garage/43-petit bbq.svg";
import tondeuse from "../assets/41-46_Garage/44-tondeuse a gazon.svg";
import veloAdulte from "../assets/41-46_Garage/45-velo adulte.svg";
import veloEnfant from "../assets/41-46_Garage/46-velo enfant.svg";
import parasol from "../assets/47_50_Jardin/47-parasol.svg";
import salonDeJardin from "../assets/47_50_Jardin/48-salon de jardin.svg";
import tableDeJardon from "../assets/47_50_Jardin/49-table de jardin.svg";
import transat from "../assets/47_50_Jardin/50-transat.svg";
import canapTwo from "../assets/51-64_Salon/51-canape deux places.svg";
import canapThree from "../assets/51-64_Salon/52-canapes trois places.svg";
import buffet from "../assets/51-64_Salon/53-buffet.svg";
import canapeAngle from "../assets/51-64_Salon/54-canape d_angle.svg";
import grandeTableBasse from "../assets/51-64_Salon/55-grande table basse.svg";
import meubleTv from "../assets/51-64_Salon/56-meuble tV.svg";
import meridienne from "../assets/51-64_Salon/57-meridienne.svg";
import fauteuilSalon from "../assets/51-64_Salon/58-fauteuil de salon.svg";
import piano from "../assets/51-64_Salon/59-piano.svg";
import tableBasse from "../assets/51-64_Salon/60-table basse (petite).svg";
import tableSalleAManger from "../assets/51-64_Salon/61-table salle a manger.svg";
import tv from "../assets/51-64_Salon/62-TV 32.svg";
import tvGrand from "../assets/51-64_Salon/63-TV GRAND ECRAN.svg";

import billard from "../assets/billiards.jpg";
import lourd from "../assets/lourd.jpg";
import pianoHeavy from "../assets/piano.jpg";
import coffre from "../assets/coffre.jpg";

// import { KilometreContext } from "../context/RecapContext";
// export const TotalVolumeGoodContext = createContext(null);
import { KilometreProvider } from "../context/RecapContext";

function ChoiceMeuble({
  count,
  setCount,
  children,
  setTotalBasket,
  totalBasket,
  volumeCalcul,
  volumeHeavy,
  totalHeavy,
  setTotalHeavy,
  // testCalcul,
  // testCalcul2,
}) {
  const [toggleTabs, setToggleTabs] = useState(1);
  const [products, setProducts] = useState([]);
  const [showSide, setShowSide] = useState(false);
  const [disable, setDisable] = useState(false);
  const [test, setTest] = useState({ name: "Junior" });

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = total + Number(products[i].volume) * products[i].quantity;
  }

  console.log("heavy", volumeHeavy);
  // let testCalcul = volumeHeavy;
  // let testCalcul2 = Number(total) + volumeHeavy;

  // console.log("testcalcul", testCalcul);

  let buanderie = [
    {
      name: "Aspirateur",
      volume: 0.06,
      quantity: "1",
      id: "3467j6789275",
      image: aspirateur,
    },
    {
      name: "Banc de rangement",
      volume: 0.18,
      quantity: "1",
      id: "34565678685l3443",
      image: bancDeRangement,
    },
    {
      name: "Lave Linge",
      volume: 0.33,
      quantity: "1",
      id: "56575754243m",
      image: laveLinge,
    },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "2335567834r",
      image: meubleChaussures,
    },
    {
      name: "Panière à linge",
      volume: 0.12,
      quantity: "1",
      id: "354646311323f",
      image: panierALinge,
    },
    {
      name: "Sèche linge",
      volume: 0.3,
      quantity: "1",
      id: "5757342435ty55",
      image: secheLinge,
    },
    {
      name: "Table de repassage",
      volume: 0.02,
      quantity: "1",
      id: "77633456789r45",
      image: tableDeRepassage,
    },
    {
      name: "Tabouret",
      volume: 0.05,
      quantity: "1",
      id: "134676768p",
      image: aspirateur,
    },
  ];

  let bureau = [
    {
      name: "Armoire 2portes",
      volume: 1.03,
      quantity: "1",
      id: "2578996",
      image: armoireDeuxPorte,
    },
    {
      name: "Blibliothèque",
      volume: 0.78,
      quantity: "1",
      id: "34578",
      image: bureauAncien,
    },
    {
      name: "Bureau ancien",
      volume: 0.64,
      quantity: "1",
      id: "6788334",
      image: bureauAncien,
    },
    {
      name: "Bureau enfant",
      volume: 0.54,
      quantity: "1",
      id: "567788875",
      image: bureauEnfant,
    },
    {
      name: "Casier de bureau",
      volume: 0.2,
      quantity: "1",
      id: "445677886",
      image: casierDeBureau,
    },
    {
      name: "Chaise de bureau",
      volume: 0.31,
      quantity: "1",
      id: "4467753333",
      image: chaiseDeBureau,
    },
    {
      name: "Clic-clac",
      volume: 1.85,
      quantity: "1",
      id: "456778",
      image: bureauAncien,
    },
    {
      name: "etagère - Bibliothèque",
      volume: 0.51,
      quantity: "1",
      id: "23R4656574",
      image: bureauAncien,
    },
    {
      name: "Fauteuil de bureau",
      volume: 0.44,
      quantity: "1",
      id: "46436636",
      image: fauteuilDeBureau,
    },
    {
      name: "Lampe de bureau",
      volume: 0.01,
      quantity: "1",
      id: "53454564574",
      image: bureauAncien,
    },
    {
      name: "Lampe sur pied",
      volume: 0.14,
      quantity: "1",
      id: "535434525",
      image: lampeSurPied,
    },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "434656457474",
      image: bancDeRangement,
    },
  ];
  let cartons = [
    {
      name: "Carton classique",
      volume: 0.06,
      quantity: "1",
      id: "5667888444",
      image: cartonClassique,
    },
    {
      name: "Carton livres",
      volume: 0.03,
      quantity: "1",
      id: "34578899922F",
      image: cartonLivres,
    },
  ];
  let chambre = [
    {
      name: "Armoire 2 portes",
      volume: 1.03,
      quantity: "1",
      id: "8844455",
      image: armoireDeuxPorte,
    },
    {
      name: "Armoire dressing",
      volume: 2,
      quantity: "1",
      id: "22200444",
      image: armoireDressing,
    },
    {
      name: "Bibliothèque",
      volume: 0.78,
      quantity: "1",
      id: "5757573883",
      image: bibliotheque,
    },
    {
      name: "Bureau enfant",
      volume: 0.54,
      quantity: "1",
      id: "959595950",
      image: bureauEnfant,
    },
    {
      name: "Chaise de bureau",
      volume: 0.31,
      quantity: "1",
      id: "3737484",
      image: chaiseDeBureau,
    },
    {
      name: "Clic-clac",
      volume: 1.85,
      quantity: "1",
      id: "38384857",
      image: armoireDeuxPorte,
    },
    {
      name: "Commode",
      volume: 0.31,
      quantity: "1",
      id: "09995844",
      image: armoireDeuxPorte,
    },
    {
      name: "etagère - Bibliothèque",
      volume: 0.51,
      quantity: "1",
      id: "77575723HH",
      image: armoireDeuxPorte,
    },
    {
      name: "Lampe sur pied",
      volume: 0.14,
      quantity: "1",
      id: "75858847373BD",
      image: lampeSurPied,
    },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "4556644",
      image: bancDeRangement,
    },

    {
      name: "Lit bébé",
      volume: 0.93,
      quantity: "1",
      id: "383727238T",
      image: litBaby,
    },
    {
      name: "Lit double",
      volume: 2.51,
      quantity: "1",
      id: "9812949595I",
      image: litDouble,
    },
    {
      name: "Lit simple",
      volume: 1.62,
      quantity: "1",
      id: "8999233233PPPRR55",
      image: litSimple,
    },
    {
      name: "Matelas double",
      volume: 0.64,
      quantity: "1",
      id: "4949494UUU",
      image: matelasDouble,
    },
    {
      name: "Matelas lit bébé",
      volume: 0.02,
      quantity: "1",
      id: "UU555223245",
      image: matelasBaby,
    },
    {
      name: "Matelas simple",
      volume: 0.36,
      quantity: "1",
      id: "TYUUUBB28755",
      image: matelasSimple,
    },
    {
      name: "Pouf",
      volume: 0.04,
      quantity: "1",
      id: "JU879002",
      image: armoireDeuxPorte,
    },
    {
      name: "Table de chevet",
      volume: 0.07,
      quantity: "1",
      id: "NI587378",
      image: armoireDeuxPorte,
    },
    {
      name: "Tabouret",
      volume: 0.05,
      quantity: "1",
      id: "OR85895",
      image: tabouret,
    },
    {
      name: "Télévision 32 pouces",
      volume: 0.03,
      quantity: "1",
      id: "WE199833",
      image: armoireDeuxPorte,
    },
  ];
  let cuisine = [
    {
      name: "Bahut",
      volume: 0.79,
      quantity: "1",
      id: "WE98764664",
    },
    {
      name: "Buffet cuisine",
      volume: 0.57,
      quantity: "1",
      id: "MB9348857",
      image: buffetCuisine,
    },
    {
      name: "Chaise",
      volume: 0.29,
      quantity: "1",
      id: "BO1897434",
      image: chaise,
    },
    {
      name: "Chaise haute bébé",
      volume: 0.14,
      quantity: "1",
      id: "PA17011987",
      image: chaiseHauteBaby,
    },
    {
      name: "Congélateur",
      volume: 0.71,
      quantity: "1",
      id: "MB47823",
      image: congelateur,
    },
    {
      name: "Four",
      volume: 0.21,
      quantity: "1",
      id: "AY3784994",
      image: four,
    },
    {
      name: "Four micro-onde",
      volume: 0.07,
      quantity: "1",
      id: "A0099887",
      image: fourMicroOndes,
    },
    {
      name: "Frigo américain",
      volume: 1.13,
      quantity: "1",
      id: "NG38759",
      image: frigoAmericain,
    },
    {
      name: "Gazinière",
      volume: 0.31,
      quantity: "1",
      id: "NA783939393",
      image: gaziniere,
    },
    {
      name: "Hotte",
      volume: 0.3,
      quantity: "1",
      id: "NG87323334",
    },
    {
      name: "Lave vaisselle",
      volume: 0.31,
      quantity: "1",
      id: "KU9874455",
      image: laveVaisselle,
    },
    {
      name: "Plante artificielle",
      volume: 0.09,
      quantity: "1",
      id: "MA198457",
    },
    {
      name: "Poubelle de cuisine",
      volume: 0.06,
      quantity: "1",
      id: "LO9875573",
    },
    {
      name: "Réfrigérateur",
      volume: 0.73,
      quantity: "1",
      id: "NG98464675O",
      image: refrigerateur,
    },
    {
      name: "Table de cuisine",
      volume: 0.72,
      quantity: "1",
      id: "O3748585",
    },
    {
      name: "Tabouret de bar",
      volume: 0.15,
      quantity: "1",
      id: "O84757593",
      image: tabouretDeBar,
    },
  ];
  let entree = [
    {
      name: "Banc d'entrée",
      volume: 0.21,
      quantity: "1",
      id: "1",
      image: bancEntree,
    },
    {
      name: "Console d'entrée",
      volume: 0.49,
      quantity: "1",
      id: "2",
      image: consoleEntree,
    },
    {
      name: "Port Manteaux",
      volume: 0.02,
      quantity: "1",
      id: "3",
      image: porteManteau,
    },
  ];
  let garage = [
    {
      name: "Aspirateur de chantier",
      volume: 0.11,
      quantity: "1",
      id: "575757",
    },
    {
      name: "Banc de rangement",
      volume: 0.18,
      quantity: "1",
      id: "100948",
      image: bancDeRangement,
    },
    { name: "Caisse à outils", volume: 0.03, quantity: "1", id: "757575" },
    {
      name: "Congelateur",
      volume: 0.71,
      quantity: "1",
      id: "38383",
      image: congelateur,
    },
    { name: "Echelle", volume: 0.11, quantity: "1", id: "38383H" },
    { name: "etabli", volume: 0.86, quantity: "1", id: "2299II" },
    {
      name: "etagères",
      volume: 0.74,
      quantity: "1",
      id: "78654TY",
      image: etageres,
    },
    {
      name: "Grand barbecue",
      volume: 1.41,
      quantity: "1",
      id: "198HJU4",
      image: grandBbq,
    },
    {
      name: "lave Linge",
      volume: 0.33,
      quantity: "1",
      id: "17171288R",
      image: laveLinge,
    },
    {
      name: "Malle de rangement",
      volume: 0.21,
      quantity: "1",
      id: "0111001BIN",
    },
    {
      name: "Meuble chaussures",
      volume: 0.25,
      quantity: "1",
      id: "39393847UU",
      image: meubleChaussures,
    },
    {
      name: "Nettoyeur haute pression",
      volume: 0.07,
      quantity: "1",
      id: "HUGUGUZZ22203",
    },
    {
      name: "Petit barbecue",
      volume: 0.08,
      quantity: "1",
      id: "1919283747",
      image: petitBbq,
    },
    { name: "Poubelle de tri", volume: 0.11, quantity: "1", id: "778484848TU" },
    {
      name: "Sèche linge",
      volume: 0.3,
      quantity: "1",
      id: "101928474848UU",
      image: secheLinge,
    },
    {
      name: "Tondeuse à gazon",
      volume: 0.52,
      quantity: "1",
      id: "BUBUB377484",
      image: tondeuse,
    },
    { name: "Valise", volume: 0.08, quantity: "1", id: "LOL1918737" },
    {
      name: "Vélo adulte",
      volume: 1.26,
      quantity: "1",
      id: "BUT485858",
      image: veloAdulte,
    },
    {
      name: "Vélo enfant",
      volume: 0.17,
      quantity: "1",
      id: "FI9378484",
      image: veloEnfant,
    },
    { name: "Ventilateur", volume: 0.17, quantity: "1", id: "IB98834" },
  ];
  let jardin = [
    {
      name: "Parasol de jardin",
      volume: 0.08,
      quantity: "1",
      id: "AET8383823",
      image: parasol,
    },
    {
      name: "Salon de jardin",
      volume: 1.34,
      quantity: "1",
      id: "LOG93838832",
      image: salonDeJardin,
    },
    {
      name: "Table de jardin",
      volume: 1.5,
      quantity: "1",
      id: "IU57848",
      image: tableDeJardon,
    },
    {
      name: "Tondeuse à gazon",
      volume: 0.52,
      quantity: "1",
      id: "GOGO93838282",
      image: tondeuse,
    },
    {
      name: "Transat",
      volume: 0.01,
      quantity: "1",
      id: "TUNEEE3838484",
      image: transat,
    },
  ];
  let salleDeBain = [
    { name: "Baignoire bébé", volume: 0.13, quantity: "1", id: "28347UU" },
    {
      name: "Colonne salle de bain",
      volume: 0.16,
      quantity: "1",
      id: "198383IL",
    },
    { name: "Meuble lavabo", volume: 0.34, quantity: "1", id: "TL38484995" },
    {
      name: "Miroir rangement",
      volume: 0.05,
      quantity: "1",
      id: "1783884ILEO",
    },
    { name: "Panière à linge", volume: 0.12, quantity: "1", id: "785859UITTT" },
  ];
  let salon = [
    {
      name: "Bibliothèque",
      volume: 0.78,
      quantity: "1",
      id: "ETYINECR78",
      image: bibliotheque,
    },
    // {
    //   name: "Billard - 300 kgs",
    //   volume: 2.39,
    //   quantity: "1",
    //   id: "EZIUVHIRUE89",
    // },
    {
      name: "Buffet",
      volume: 0.84,
      quantity: "1",
      id: "BUVRBV477575",
      image: buffet,
    },
    {
      name: "Canapé 2 places",
      volume: 1.41,
      quantity: "1",
      id: "NRIUNI89944",
      image: canapTwo,
    },
    {
      name: "Canapé 3 places",
      volume: 1.91,
      quantity: "1",
      id: "UHRIEH234",
      image: canapThree,
    },
    {
      name: "Canapé d'angle",
      volume: 2.84,
      quantity: "1",
      id: "RNVIRVNI484848",
      image: canapeAngle,
    },

    // { name: "Coffre-fort - 300 kgs", volume: 0.14, quantity: "1", id: "OOZOZ" },
    {
      name: "étagère - Bibliothèque",
      volume: 0.51,
      quantity: "1",
      id: "UTUTIJ47859",
      image: bibliotheque,
    },
    // { name: "Fauteuil club", volume: 0.74, quantity: "1", id: "8284885UTIK" },
    // {
    //   name: "Fauteuil de salon",
    //   volume: 0.86,
    //   quantity: "1",
    //   id: "RNVIRHVI889944",
    // },
    {
      name: "Grande table basse",
      volume: 0.33,
      quantity: "1",
      id: "NVIERBVIE193939",
      image: grandeTableBasse,
    },
    // { name: "Lampe de salon", volume: 0.08, quantity: "1", id: "IVNIVN" },
    {
      name: "Lampe sur pied",
      volume: 0.14,
      quantity: "1",
      id: "OVRNRUNRE84938",
      image: lampeSurPied,
    },
    {
      name: "Méridienne",
      volume: 1.28,
      quantity: "1",
      id: "VNEIRVN4937RVH",
      image: meridienne,
    },
    {
      name: "Meuble télévision",
      volume: 0.42,
      quantity: "1",
      id: "NTIBNTIB88349",
      image: meubleTv,
    },
    // {
    //   name: "Meuble vitrine",
    //   volume: 0.84,
    //   quantity: "1",
    //   id: "IRENVIREVN98384",
    // },
    {
      name: "Piano -300 kgs",
      volume: 1.13,
      quantity: "1",
      id: "ENRVIREBN33Z",
      image: piano,
    },
    // {
    //   name: "Plante artificielle",
    //   volume: 0.09,
    //   quantity: "1",
    //   id: "PAFJRO48959",
    // },
    // { name: "Pouf", volume: 0.04, quantity: "1", id: "RNIEH848404" },
    {
      name: "Table basse",
      volume: 0.1,
      quantity: "1",
      id: "RHBITEBI23R45",
      image: tableBasse,
    },
    {
      name: "Table de salle à manger",
      volume: 1.15,
      quantity: "1",
      id: "RINIEVNEIR484884",
      image: tableSalleAManger,
    },
    // { name: "Table gigogne", volume: 0.12, quantity: "1", id: "IUNICNI484849" },
    {
      name: "Télévision 32 pouces",
      volume: 0.03,
      quantity: "1",
      id: "I23UH4F94H94",
      image: tv,
    },
    {
      name: "Télévision grand ecran",
      volume: 0.13,
      quantity: "1",
      id: "93N4HV9H9",
      image: tvGrand,
    },
    // { name: "Vaisselier", volume: 1.27, quantity: "1", id: "49H3HV84B493VB93" },
  ];

  let heavyObject = [
    {
      name: "Coffre-fort",
      volume: "0.14",
      quantity: "1",
      id: "93N4HPOV9H9",
      image: coffre,
    },
    {
      name: "Billard",
      volume: "2.39",
      quantity: "1",
      id: "93NRR4HPOV9H9",
      image: billard,
    },
    {
      name: "Objet entre 100 et 300kg",
      volume: "0.50",
      quantity: "1",
      id: "93N4HPVVOV9H9",
      image: lourd,
    },
    {
      name: "Piano",
      volume: "1.13",
      quantity: "1",
      id: "93N4HPOMMV9H9",
      image: pianoHeavy,
    },
  ];

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  // const showBlock = () => setShowSide(true);

  return (
    <KilometreProvider value={{ test, setTest }}>
      <div className="App">
        {volumeCalcul === "" ? (
          <div className="container">
            <div className="bloc__onglets">
              <div
                className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Buanderie
              </div>
              <div
                className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Bureau
              </div>
              <div
                className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Cartons
              </div>
              <div
                className={toggleTabs === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                Chambre
              </div>
              <div
                className={toggleTabs === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
              >
                Cuisine
              </div>
              <div
                className={toggleTabs === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(6)}
              >
                Entrée
              </div>
              <div
                className={toggleTabs === 7 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(7)}
              >
                Garage
              </div>
              <div
                className={toggleTabs === 8 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(8)}
              >
                Jardin
              </div>
              <div
                className={toggleTabs === 9 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(9)}
              >
                Salle de Bain
              </div>
              <div
                className={toggleTabs === 10 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(10)}
              >
                Salon
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 1 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {buanderie.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 2 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {bureau.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 3 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {cartons.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 4 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {chambre.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 5 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {cuisine.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 6 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {entree.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 7 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {garage.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 8 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {jardin.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "50px",
                            }}
                          >
                            {meuble.name}
                          </p>
                          <img
                            src={meuble.image}
                            alt=""
                            width="130"
                            height="130"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 9 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {salleDeBain.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                        }}
                      >
                        <p>{meuble.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contenu__onglets">
              <div
                className={
                  toggleTabs === 10 ? "contenu active-contenu" : "contenu"
                }
              >
                <div
                  style={{
                    // border: "1px solid blue",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {salon.map((meuble, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          //créer une copie
                          setDisable(true);
                          const newProduct = [...products];
                          let isFound = false;
                          for (let i = 0; i < products.length; i++) {
                            if (products[i].id === meuble.id) {
                              newProduct[i].quantity++;
                              isFound = true;
                              break;
                            }
                          }
                          if (isFound === false) {
                            //modifier la copie
                            newProduct.push({
                              name: meuble.name,
                              volume: meuble.volume,
                              quantity: "1",
                              id: meuble.id,
                            });
                          }

                          //mettre à jour le state

                          setProducts(newProduct);
                        }}
                        style={{
                          border: "1px solid #94c935",
                          display: "flex",
                          flexDirection: "column",
                          height: "225px",
                          width: "225px",
                          margin: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                          }}
                        >
                          {meuble.name}
                        </p>
                        <img
                          src={meuble.image}
                          alt=""
                          width="130"
                          height="130"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <HeavyObjet
              heavyObject={heavyObject}
              setProducts={setProducts}
              products={products}
              volumeHeavy={volumeHeavy}
              totalHeavy={totalHeavy}
              setTotalHeavy={setTotalHeavy}
            />
          </div>
        ) : (
          <HeavyObjet
            heavyObject={heavyObject}
            setProducts={setProducts}
            products={products}
            volumeHeavy={volumeHeavy}
            totalHeavy={totalHeavy}
            setTotalHeavy={setTotalHeavy}
            setDisable={setDisable}
          />
        )}
        <div className="btn2">
          <button style={{ height: "" }} onClick={() => setCount(count - 1)}>
            précedent
          </button>

          <button disabled={!disable} onClick={() => setCount(count + 1)}>
            suivant
          </button>
        </div>
        <div style={{ display: "none" }}>
          <Basket
            products={products}
            setProducts={setProducts}
            total={total}
            showSide={showSide}
            totalBasket={totalBasket}
            setTotalBasket={setTotalBasket}
            total={total}
          />
        </div>
        <div className={showSide ? "panier__contain" : "panier__none"}>
          <div className="panier__meuble">
            <h1>Panier</h1>

            <div className="panier__listeblock">
              {products.map((product, idx) => {
                return (
                  <div className="panier__liste">
                    <button
                      onClick={() => {
                        const newProduct = [...products];

                        if (newProduct[idx].quantity === 0) {
                          newProduct.splice(idx, 1);
                        } else {
                          newProduct[idx].quantity--;
                        }
                        setProducts(newProduct);
                      }}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      onClick={() => {
                        const newProduct = [...products];
                        newProduct[idx].quantity++;
                        setProducts(newProduct);
                      }}
                    >
                      +
                    </button>
                    {product.name}
                  </div>
                );
              })}
            </div>
            <div className="panier__volumeblock">
              {volumeCalcul ? (
                <p className="panier__volume">
                  Volume : {Number(volumeCalcul) + volumeHeavy} m3
                </p>
              ) : (
                <p className="panier__volume">Volume : {total.toFixed(2)} m3</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </KilometreProvider>
  );
}
export default ChoiceMeuble;
