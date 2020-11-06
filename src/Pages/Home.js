import React from "react";
import Header from "../components/Header";
import Pack from "../components/Pack";
import SousHeader from "../components/SousHeader";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <SousHeader />
      <Pack />
    </div>
  );
}

export default Home;
