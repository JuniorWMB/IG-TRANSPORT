import React, { useState } from "react";

const FormulaireRecap = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="blockDemenagementRecap ">
      <form
        action=""
        name="Contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="twoBlockDepart formRecapMain"
      >
        <div className="blockFormRecap">
          <div className="formBlockLeft">
            <div className="blockInputForm">
              <input type="hidden" name="form-name" value="Contact" />
              <input type="hidden" name="bot-field" />
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

          {/* block space */}

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
