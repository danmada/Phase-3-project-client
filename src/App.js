import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewBarForm from "./components/NewBarForm";
import About from "./components/About";

function App() {
  const [gameType, setGameType] = useState([]);
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/game_types`)
      .then((res) => res.json())
      .then((json) => {
        setGameType(json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`http://localhost:9292/bars`)
      .then((res) => res.json())
      .then((json) => setBars(json));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/form"
          component={() => (
            <NewBarForm gameType={gameType} bars={bars} setBars={setBars} />
          )}
        />
        <Route path="/about" component={() => <About />} />
        <Route
          exact
          path="/"
          component={() => <Home bars={bars} gameType={gameType} />}
        />
      </Switch>
    </div>
  );
}

export default App;
