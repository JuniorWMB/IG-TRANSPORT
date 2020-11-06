import React from "react";
import "../App.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  logoColor: {
    color: "red",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className="header__contain">
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="company logo" />
        </Link>
        <div className="header__icon">
          <Link to="/signup" className="header__iconAccount">
            <AccountCircleIcon fontSize="large" color="primary" />
          </Link>
          <div className="header__iconCart">
            <ShoppingCartIcon fontSize="large" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
