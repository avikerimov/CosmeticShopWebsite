import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/Home";
import ArmaniMan from "./components/Man_Perfumes/ArmaniMan";
import DiorMan from "./components/Man_Perfumes/DiorMan";
import Navbar from "./components/Navbar";

function App() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <Switch>
          <main className="min-h-900">
            <Route path="/" exact component={Home} />
            <Route path="/DiorMan" exact component={DiorMan} />
            <Route path="/ArmaniMan" exact component={ArmaniMan} />
          </main>
        </Switch>
        <footer>{/* <Footer /> */}</footer>
      </React.Fragment>
    );
  
}

export default App;
