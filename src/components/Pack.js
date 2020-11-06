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
            Services de logistique avec possibilité de livraison préparation des
            commandes stockage de palettes nous étudions toutes propositions
          </p>
        </div>
      </div>
      <div className="pack">
        <p> Particulier</p>
        <div className="pack__logo">
          <PeopleIcon fontSize="large" />
        </div>
        <div className="pack__textprof">
          <p>
            une gamme de solutions complètes pour le déménagement et le stockage
            de meubles pour particulier
          </p>
        </div>
      </div>
      <div className="pack">
        <p> Contact</p>
        <div className="pack__logo">
          <DevicesIcon fontSize="large" />
        </div>
        <div className="pack__textprof">
          <p>
            Si vous avez des questions à propos de nos produits ou de nos
            services, veuillez nous contacter en remplissant le formulaire
            ci-dessous, nous vous répondrons dans les plus brefs délais. Vous
            avez aussi la possibilité de nous appeler ou encore de nous rendre
            visite sur place
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pack;
