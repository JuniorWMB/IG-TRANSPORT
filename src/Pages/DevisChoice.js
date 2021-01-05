import React from "react";
import BlockMultiDevis from "../components/BlockMultiDevis";
import SsBanner from "../components/SsBanner";
import TextMultiDevis from "../components/TextMultiDevis";

function DevisChoice() {
  return (
    <div>
      <SsBanner />
      <TextMultiDevis />
      <BlockMultiDevis />
    </div>
  );
}

export default DevisChoice;
