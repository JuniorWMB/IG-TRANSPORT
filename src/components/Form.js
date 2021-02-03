import React from "react";

function Form() {
  return (
    <div>
      <div className="form__container">
        <div>
          <h3>Vos coordonnées</h3>
        </div>
        <form action="" className="form__blk">
          <div className="form__inputcontainone">
            <div className="label" style={{ marginLeft: "35px" }}>
              <label htmlFor="">Nom :</label>
              <input type="text" name="nom" id="nom" />
            </div>
            <div className="label" style={{ marginLeft: "40px" }}>
              <label htmlFor="">Prénom :</label>
              <input type="text" name="prenom" id="prenom" />
            </div>
          </div>

          <div className="form__inputcontaintwo">
            <div className="label">
              <label htmlFor="">Adresse :</label>
              <input type="text" name="adresse" id="adresse" />
            </div>
            <div className="label">
              <label htmlFor="">Téléphone :</label>
              <input type="tel" name="telephone" id="telephone" />
            </div>
          </div>
          <div className="form__inputcontainthree">
            <div className="label" style={{ marginLeft: "8px" }}>
              <label htmlFor="">Email :</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="label" style={{ marginLeft: "70px" }}>
              <label htmlFor="">Ville :</label>
              <input type="text" name="ville" id="ville" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
