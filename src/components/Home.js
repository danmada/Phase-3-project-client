import React, { useEffect, useState } from "react";

const Home = () => {
  const [gameType, setGameType] = useState("");
  const [bars, setBars] = useState("");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    gameTypes: "",
    barsCity: "",
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
  console.log(bars);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  console.log(search);

  return (
    <div>
      <h1>Home</h1>
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
        <label for="barsCity">Where are you playing?</label>
        <select onChange={handleChange} name="barsCity">
          {bars.map((bar) => {
            return (
              <option key={bar.id} value={bar.city}>
                {bar.city}
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
    </div>
  );
};

export default Home;
