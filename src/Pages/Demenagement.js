import React from "react";
import DemenagementText from "../components/DemenagementText";
import { PackDem } from "../components/PackDem";

export const Demenagement = () => {
  return (
    <div>
      <div className="header__sousHeader">
        <DemenagementText />
      </div>
      <PackDem />
    </div>
  );
};
