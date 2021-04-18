import React from "react";
import "../App.css";
// import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDehaze } from "react-icons/md";

import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function Header({ show, setShow }) {
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
            <p>Accueil</p>
          </Link>
          <Link to="/all-products">
            <p>Shop</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
        </div>
        <div className="header__icon">
          <div className="header__iconCart">
            <button
              class="snipcart-checkout"
              className="basket__checkout"
              style={{
                background: "none",
                backgroundColor: "none",
                height: "100%",
                width: "65px",
              }}
            >
              <AiOutlineShoppingCart size="30" color="#2670bd" />
              <span
                class="snipcart-items-count"
                style={{
                  color: "#94c935",
                  fontSize: "1.4em",
                }}
              ></span>
            </button>
            <button
              class="snipcart-checkout"
              style={{
                background: "none",
                backgroundColor: "none",
              }}
            >
              <span
                class="snipcart-total-price"
                style={{
                  color: "#2670bd",
                  fontSize: "1.4em",
                }}
              ></span>
            </button>
          </div>
          {/* <div className="menuicon__menuhidden">
        <MdDehaze size={30} color="#2670bd"onClick={()=>setShow(!show)}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
