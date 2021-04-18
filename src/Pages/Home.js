import React, { useEffect } from "react";
import Pack from "../components/Pack";
import SousHeader from "../components/SousHeader";
import ReactGa from "react-ga";
// import NavMenuResp from "../components/NavMenuResp";

function Home({ show, setShow }) {
  useEffect(() => {
    ReactGa.initialize("UA-182977148-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      {/* <NavMenuResp show={show} setShow={setShow} /> */}
      <SousHeader />
      <Pack />
    </div>
  );
}

export default Home;
