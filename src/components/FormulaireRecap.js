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
      <form action="" className="twoBlockDepart formRecapMain">
        <div className="blockFormRecap">
          <div className="formBlockLeft">
            <div className="blockInputForm">
              <label htmlFor="">Nom:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="">Adresse:</label>
              <input
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="">Email:</label>
              <input
                type="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* block space */}

          <div className="formBlockRight">
            <div className="blockInputForm">
              <label htmlFor="">Prénom:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="">Ville:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="blockInputForm">
              <label htmlFor="">Téléphone:</label>
              <input
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
