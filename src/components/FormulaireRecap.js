import React, { useState } from "react";

const FormulaireRecap = ({
  addressGO,
  cityEnd,
  arrondiDist,
  volumeCalcul,
  totalBasket,
  date,
  endDate,
  totalQuantityV2,
  totalDevisFinal,
}) => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="blockDemenagementRecap ">
      <form
        action=""
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="twoBlockDepart formRecapMain"
        onSubmit="submit"
      >
        <div className="blockFormRecap">
          <div className="formBlockLeft">
            <div className="blockInputForm">
              <label htmlFor="Nom">Nom:</label>
              <input
                id="Nom"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="Adresse">Adresse:</label>
              <input
                id="Adresse"
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="Email">Email:</label>
              <input
                id="Email"
                type="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="formBlockRight">
            <div className="blockInputForm">
              <label htmlFor="Prénom">Prénom:</label>
              <input
                id="Prénom"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="Ville">Ville:</label>
              <input
                id="Ville"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="Phone">Téléphone:</label>
              <input
                id="Phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div hidden>
              <label htmlFor="adresse">
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  value={addressGO}
                />
              </label>
              <label htmlFor="adresse final">
                <input
                  type="text"
                  name="adresse final"
                  id="adresse final"
                  value={cityEnd}
                />
              </label>
              <label htmlFor="Distance en KM">
                <input
                  type="text"
                  name="Distance en KM"
                  id="Distance en KM"
                  value={arrondiDist}
                />
              </label>
              <label htmlFor="Produit">
                <input
                  type="text"
                  name="Produit"
                  id="Produit"
                  value={volumeCalcul}
                />
              </label>
              <label htmlFor="Volume en m3">
                <input
                  type="text"
                  name="Volume en m3"
                  id="Volume en m3"
                  value={totalBasket}
                />
              </label>
              <label htmlFor="panier">
                <input type="text" name="panier" id="panier" />
              </label>
              <label htmlFor="date">
                <input
                  type="text"
                  name="date"
                  id="date"
                  value={date[0].toLocaleDateString("fr-FR", options)}
                />
              </label>
              <label htmlFor="date final">
                <input
                  type="text"
                  name="date final"
                  id="date final"
                  value={endDate[1].toLocaleDateString("fr-FR", options)}
                />
              </label>
              <label htmlFor="Nombre de Produit">
                <input
                  type="text"
                  name="Nombre de Produit"
                  id="Nombre de Produit"
                  value={totalQuantityV2}
                />
              </label>
              <label htmlFor="Prix en euros">
                <input
                  type="text"
                  name="Prix en euros"
                  id="Prix en euros"
                  value={totalDevisFinal.toFixed(2)}
                />
              </label>
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
          </div>
        </div>
        <button className="buttonRecap" type="submit">
          Recevoir mon devis par mail
        </button>
      </form>
    </div>
  );
};

export default FormulaireRecap;
