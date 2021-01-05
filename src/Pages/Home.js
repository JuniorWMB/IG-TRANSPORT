import React, { useEffect } from "react";
import Pack from "../components/Pack";
import SousHeader from "../components/SousHeader";
import ReactGa from "react-ga";

function Home() {
  useEffect(() => {
    ReactGa.initialize("UA-182977148-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <SousHeader />
      <Pack />
    </div>
  );
}

export default Home;
