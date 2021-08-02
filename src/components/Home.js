import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 40px;
  text-align: center;
  color: blue;
  background-color: grey;
  font-size: 45px;
`;

const Home = () => {
  const [gameType, setGameType] = useState("");
  const [bars, setBars] = useState("");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    gameTypes: "",
    city: "",
  });
  useEffect(() => {
    fetch(`http://localhost:9292/game_types`)
      .then((res) => res.json())
      .then((json) => {
        setGameType(json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/bars`)
      .then((res) => res.json())
      .then((json) => setBars(json));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    let filterCity = bars.filter((bar) => bar.city === form.city);
    let fileterGames = [];
    filterCity.forEach((bar) => {
      bar.bar_game_types.forEach((game) => {
        if (game.game_type === form.gameTypes) {
          fileterGames.push(bar);
        }
      });
    });
    console.log(fileterGames);
  };
  const reducedCities = (bars) => {
    let cities = bars.map((bar) => bar.city);
    return [...new Set(cities)];
  };
  console.log(reducedCities(bars));

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label for="gameTypes">Type of game</label>
        <select onChange={handleChange} name="gameTypes">
          {gameType.map((game) => {
            return (
              <option key={game.id} value={game.game_type}>
                {game.game_type}
              </option>
            );
          })}
        </select>
        <label for="city">Where are you playing?</label>
        <select onChange={handleChange} name="city">
          {reducedCities(bars).map((bar) => {
            return (
              <option key={bar} value={bar}>
                {bar}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Search" />
      </form>
      {/* {search.map((bar) => {
        return (
          <div>
            <h1>Name: {bar.name}</h1>
            <p>{bar.description}</p>
            <p>{bar.rating}</p>
            <p>{bar.city}</p>
            <p>{bar.name}</p>
            {bar.bar_game_types.map((type) => {
              return <p> Game Type: {type.game_type}</p>;
            })}
          </div>
        );
      })} */}
    </Container>
  );
};

export default Home;
