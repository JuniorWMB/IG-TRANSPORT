import React, { useState } from "react";
// import { Formik } from "formik";
import Header from "../components/Header";

import "../App.css";
import logo from "../assets/logo.webp";
import gsap from "gsap";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [textError, setTextError] = useState("");
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
          <div className="block__input">
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
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              flexDirection: "column",
              border: "1px solid red",
              textAlign: "center",
              color: "grey",
            }}
          >
            <p className="text__confirm">
              Votre mots de passe doit contenir une majuscule
            </p>
            <p className="text__confirm">
              Votre mots de passe doit contenir une minuscule
            </p>
            <p className="text__confirm">
              Votre mots de passe doit contenir un caracterer special
            </p>
            <p className="text__confirm">
              Votre mots de passe doit contenir un chiffre
            </p>
          </div>
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
