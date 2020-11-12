import React from "react";
import DemenagementText from "../components/DemenagementText";
import Header from "../components/Header";
import { PackDem } from "../components/PackDem";

export const Demenagement = () => {
  return (
    <div>
      <Header />
      <div className="header__sousHeader">
        <DemenagementText />
      </div>
      <PackDem />
    </div>
  );
};
