import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100px;
  padding-top: 25%;
  text-align: center;
  // background-color: rgb(0, 149, 121);
  font-size: 24px;
  z-index: 1;
`;

const Search = ({
  form,
  setForm,
  bars,
  search,
  setSearch,
  gameType,
  setIsSearched,
}) => {
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filterCity = bars.filter((bar) => bar.city === form.city);
    let fileterGames = [];
    filterCity.forEach((bar) => {
      bar.bar_game_types.forEach((game) => {
        if (game.game_type === form.gameTypes) {
          fileterGames.push(bar);
        }
      });
    });
    if (fileterGames.length === 0) {
      alert("Please select a game and city to search!");
      return;
    }
    setSearch(fileterGames);
    setIsSearched(true);
  };
  console.log(search);
  const reducedCities = (bars) => {
    let cities = bars.map((bar) => bar.city);
    return [...new Set(cities)];
  };
  return (
    <Container>
      {/* <h3>What's on tap for tonight?</h3> */}
      <form onSubmit={handleSubmit}>
        <label for="gameTypes">I want to play </label>
        <select onChange={handleChange} name="gameTypes">
          <option value={null}>Game</option>
          {gameType.map((game) => (
            <option key={game.id} value={game.game_type}>
              {game.game_type}
            </option>
          ))}
        </select>
        <label for="city">in</label>
        <select onChange={handleChange} name="city">
          <option value={null}>City</option>

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
    </Container>
  );
};

export default Search;
