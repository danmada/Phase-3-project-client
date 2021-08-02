import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewBarForm from "./components/NewBarForm";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/form" component={() => <NewBarForm />} />
        <Route path="/about" component={() => <About />} />
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
