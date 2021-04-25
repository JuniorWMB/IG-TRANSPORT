import "./App.css";
import React, { useEffect, useState } from "react";

import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import { Demenagement } from "./Pages/Demenagement";
import Stockage from "./Pages/Stockage";
import Products from "./Pages/Products";
import GardeMeuble from "./Pages/GardeMeuble";
import Devis from "./Pages/Devis";
import Footer from "./components/Footer";
import DevisChoice from "./Pages/DevisChoice";
import Header from "./components/Header";
import BoxMobile from "./Pages/BoxMobile";
import Transport from "./Pages/Transport";
// import Success from "./Pages/Success";
function App() {
  useEffect(() => {
    document.title = "Iguane Transport";
  });

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/demenagement" component={Demenagement} />
          <Route path="/stockage" component={Stockage} />
          <Route path="/all-products" component={Products} />
          <Route path="/box-mobile" component={BoxMobile} />
          <Route path="/garde-meuble" component={GardeMeuble} />
          <Route path="/devis" component={Devis} />
          <Route path="/vos-devis" component={DevisChoice} />
          <Route path="/transport" component={Transport} />
          {/* <Route path="/success" component={Success} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
