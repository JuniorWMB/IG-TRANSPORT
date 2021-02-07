import React from "react";
import Box from "../components/Box";

const BoxMobile = () => {
  return (
    <div className="header__sousHeader">
      <div className="boxmobile__master">
        <h3>Box Mobile</h3>
        <p>Transport par caisse mobile sur toute la region parisienne</p>
        <p>à partir de: 50€</p>
      </div>
      <Box />
    </div>
  );
};

export default BoxMobile;
