import React, { useState } from "react";
// import { Formik } from "formik";
import Header from "../components/Header";
import zxcvbn from "zxcvbn";

import "../App.css";
import gsap from "gsap";
/*eslint-disable*/
const passwordReg = /^[a-zA-Z0-9_\.\-\@\#\$\%]{4}$/;
const emailReg = /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [textError, setTextError] = useState("");
  const [validationMp, setValidationMp] = useState(true);
  const [errorStyle, setErrorStyle] = useState(true);

  const handleSubmit = (e) => {
    const tl = gsap.timeline();

    e.preventDefault();
    if (name && username && email && password && confirmPassword) {
      tl.to(".form__block", {
        duration: 1,
        boxShadow: "1px 1px 20px green",
      });

      if (password === confirmPassword) {
        tl.to(".form__block", {
          duration: 1,
          boxShadow: "1px 1px 20px green",
        });
        if (
          password.charAt(e.target.value) &&
          confirmPassword.charAt(e.target.value) === ""
        ) {
        }
      } else {
        setTextError("Les mots de passes ne sont pas identique");
        setErrorStyle(false);
        tl.to(".form__block", { duration: 1, boxShadow: "1px 1px 20px red" });
      }
    } else {
      setTextError("Veuillez tous renseigné svp");
      setErrorStyle(false);
      tl.to(".form__block", 0.1, {
        x: "+=20",
        yoyo: true,
        repeat: 9,
      });
    }
  };

  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  const textProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "Tres faible";
      case 1:
        return "Faible";
      case 2:
        return "Moyen";

      case 3:
        return "Fort";

      case 4:
        return "#Très fort";
      default:
        return "";
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAd00";

      case 3:
        return "#9bc158";

      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: "100%",
    // borderRadius: "15px",
  });

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="form"></div>
      <div className="form2__container">
        <form onSubmit={handleSubmit} className="form__block">
          <div className="block__input">
            <h1>Sign Up</h1>
          </div>

          <div className="block__input">
            <label htmlFor="Nom"></label>
            <input
              className={errorStyle ? "form__bottominput" : "form__blockerror"}
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="block__input">
            <label htmlFor="Prénom"></label>
            <input
              className={errorStyle ? "form__bottominput" : "form__blockerror"}
              type="text"
              placeholder="Prénom"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="block__input">
            <label htmlFor="Email"></label>
            <input
              className={errorStyle ? "form__bottominput" : "form__blockerror"}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
            className="block__input"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="Password"></label>
            <input
              className={errorStyle ? "form__bottominput" : "form__blockerror"}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="block__input">
            <label htmlFor="Confirm password"></label>
            <input
              className={errorStyle ? "form__bottominput" : "form__blockerror"}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: "313px",
              left: "25.5%",
            }}
          >
            <div
              style={{
                width: "305px",
                height: "10px",
                border: "0px solid grey",
                marginTop: "1px",
                borderRadius: "15px",
                background: "grey",
                overflow: "hidden",
              }}
            >
              <div className="progress_bar" style={changePasswordColor()}></div>
            </div>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "5px",
              }}
            >
              <h3>weak</h3>
            </div>
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              flexDirection: "column",
              color: "grey",
            }}
          >
            <div style={{ width: "300px" }}>
              <p className="text__confirm">
                Votre mots de passe doit contenir une majuscule.
              </p>
              <p className="text__confirm">
                Votre mots de passe doit contenir une minuscule.
              </p>
              <p className="text__confirm">
                Votre mots de passe doit contenir un caracterer special.
              </p>
              <p className="text__confirm">
                Votre mots de passe doit contenir au moins un chiffre.
              </p>
            </div>
          </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
            }}
          >
            <p style={{ fontSize: "1.2em", color: "red" }}>{textError}</p>
          </div>
          <div className="button">
            <button type="submit">Envoi</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
