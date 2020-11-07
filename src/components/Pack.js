import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PeopleIcon from "@material-ui/icons/People";
import DevicesIcon from "@material-ui/icons/Devices";

function Pack() {
  return (
    <div className="pack__contain">
      <div className="pack">
        <p> Professionels</p>
        <div className="pack__logo">
          <LocalShippingIcon fontSize="large" />
        </div>
        <div className="pack__textprof">
          <p>
            Services de logistique avec possibilité de livraison, préparation
            des commandes et stockage de palettes. Nous répondons toutes vos
            demandes.
          </p>
        </div>
      </div>
      <div className="pack">
        <p> Particuliers</p>
        <div className="pack__logo">
          <PeopleIcon fontSize="large" />
        </div>
        <div className="pack__textprof">
          <p>
            Une ofrre complète pour vous accompagnez dans votre projet de
            déménagement.
            <br /> Nous proposons 3 formules pour répondre à vos besoins ainsi
            que le stockage de meubles.
          </p>
        </div>
      </div>
      <div className="pack">
        <p> Vente de Produits</p>
        <div className="pack__logo">
          <DevicesIcon fontSize="large" />
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
