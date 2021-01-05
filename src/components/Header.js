import React from "react";
import "../App.css";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiAlignJustify } from "react-icons/fi";

import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__contain">
      <div className="header">
        <div>
          <>
            <img className="header__logo" src={logo} alt="company logo" />
          </>
        </div>
        <div className="header__textnav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/all-products">
            <p>Shop</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
        </div>
        <div className="header__icon">
          <Link
            to="/signup"
            className="header__iconAccount"
            style={{
              background: "#94c935",
              fontSize: "20px",
              color: "white",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div
            className="header__iconCart"
            style={{
              background: "#94c935",
              // background: "#2C436D",
              fontSize: "20px",
              color: "white",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
