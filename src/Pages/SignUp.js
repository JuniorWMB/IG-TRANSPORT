import React from "react";
// import { Formik } from "formik";
import Header from "../components/Header";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import "../App.css";
import logo from "../assets/logo.webp";

function SignUp() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="form"></div>
      <div className="form__signup">
        <form className="form__signdesign" action="">
          <div className="form__title">
            <h1>Créer votre compte</h1>
            <img style={{ height: "80%" }} src={logo} alt="company logo" />
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
              <input style={{ marginBottom: "48px" }} type="password" />
              <button type="submit">VALIDER</button>
            </div>
          </div>
        </form>
        <div className="form__contact">
          <div className="form__info">
            <div className="form__infoabove">
              <LocationOnIcon />
              <p>16 rue du Cantal 91090 Lisses</p>
            </div>
            <div className="form__infoabove">
              <PhoneIphoneIcon />
              <p>0642424242</p>
            </div>
            <div className="form__infoabove">
              <EmailIcon />
              <p>Contact@iguanetransport.com</p>
            </div>
          </div>
          <div
            style={{
              marginLeft: "20px",
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
              border: "1px solid green",
            }}
          >
            <FacebookIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
