import React, { useEffect, useState } from "react";
// import { Formik } from "formik";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Swal from "sweetalert2";

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
  const [toggleBlock, setToggleBlock] = useState(false);

  const toggleClick = () => {
    setToggleBlock(!toggleBlock);
  };

  const handleSubmit = (e) => {
    const tl = gsap.timeline();

    e.preventDefault();
    if (name && username && email && password && confirmPassword) {
      setTextError("Compte créé");
      setColorValid(true);

      if (password === confirmPassword) {
        Swal.fire({
          title: "Compte créé",
          text:
            "Merci pour votre inscription. Vous avez reçu un email de confirmation. Consultez cet email et cliquez sur le lien d'activation.",
          icon: "success",
          confirmButtonText: "Cool",
        });
        tl.to(".form__block", {
          duration: 1,
        });
      } else {
        setTextError("Les mots de passe ne sont pas identique");
        setErrorStyle(false);
        setColorValid(false);
        tl.to(".form__block", {
          duration: 0.1,
          x: "+=20",
          yoyo: true,
          repeat: 9,
        });
      }
    } else {
      setTextError("Veuillez tous renseigné svp");
      setErrorStyle(false);
    }
  };
  useEffect(() => {
    const tl2 = gsap.timeline();

    tl2.from(".login__left", {
      duration: 1.7,
      x: 100,
      ease: "power4.Out",
      delay: 3,
      opacity: 0,
    });
  }, []);

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
            <input
              className="login__link"
              onClick={toggleClick}
              type="button"
              value="Go Login"
            />
            {/* <button className="login__link">Login</button> */}
          </div>
        </form>
        {toggleBlock ? (
          <div className="login__left">
            <h3>Log in</h3>
            <input type="text" />
            <input type="text" />
            <div>
              <input type="button" value="login" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SignUp;
