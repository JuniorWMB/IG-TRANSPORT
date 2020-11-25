import React, { useState } from "react";
// import { Formik } from "formik";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

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
  const [colorValid, setColorValid] = useState(true);

  const handleSubmit = (e) => {
    const tl = gsap.timeline();

    e.preventDefault();
    if (name && username && email && password && confirmPassword) {
      tl.to(".form__block", {
        duration: 1,
        boxShadow: "1px 1px 20px green",
      });
      setTextError("Compte créer");
      setColorValid(true);

      if (password === confirmPassword) {
        tl.to(".form__block", {
          duration: 1,
          boxShadow: "1px 1px 20px green",
        });
      } else {
        setTextError("Les mots de passe ne sont pas identique");
        setErrorStyle(false);
        setColorValid(false);

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

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="form"></div>
      <div className="form2__container">
        <form onSubmit={handleSubmit} className="form__block">
          <div className="block__input">
            <h1>Créer un compte</h1>
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

          <div
            className="block__input"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
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
            <div
              style={{
                width: "300px",
                height: "100px",
              }}
            >
              <ProgressBar password={password} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
            }}
          >
            {colorValid === true ? (
              <p style={{ fontSize: "1.2em", color: "green" }}>{textError}</p>
            ) : (
              <p style={{ fontSize: "1.2em", color: "red" }}>{textError}</p>
            )}
          </div>
          <div className="button">
            <button
              className="button__submit"
              disabled={
                name.length < 1 ||
                username.length < 1 ||
                email.length < 1 ||
                confirmPassword.length < 1
              }
              type="submit"
            >
              Envoi
            </button>
            <input className="login__link" type="button" value="Go Login" />
            {/* <button className="login__link">Login</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
