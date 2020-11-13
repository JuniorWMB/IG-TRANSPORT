import "./App.css";
import React, { useEffect } from "react";

import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import { Demenagement } from "./Pages/Demenagement";
import Stockage from "./Pages/Stockage";

function App() {
  useEffect(() => {
    document.title = "Iguane Transport";
  });
  console.log(">>>>", document);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/demenagement" component={Demenagement} />
          <Route path="/stockage" component={Stockage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
