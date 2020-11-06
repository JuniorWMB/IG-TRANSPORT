import React from "react";
// import { Formik } from "formik";
import Header from "../components/Header";
import "../App.css";

function SignUp() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="form"></div>
      <div className="form__signup">
        <form className="form__signdesign" action="">
          <div className="form__title">
            <h1>Créer votre compte</h1>
            <div>logo</div>
          </div>
          <div className="form__block">
            <div className="form__designleft">
              <label htmlFor="">Prénom</label>
              <input type="text" />
              <label htmlFor="">Nom</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="form__designright">
              <label htmlFor="">Mot de passe</label>
              <input type="password" />
              <label htmlFor="">Confirmation de votre mot de passe</label>
              <input type="password" />
              <button type="submit">VALIDER</button>
            </div>
          </div>
        </form>
        <div className="form__contact"></div>
      </div>
    </div>
  );
}

export default SignUp;
