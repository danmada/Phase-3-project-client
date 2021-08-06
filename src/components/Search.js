import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  width: 36.5%;
  height: 75px;
  padding-top: 25px;
  text-align: center;
  background-color: rgb(71, 109, 158, 0.7);
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 31.5%;
  z-index: 1;
`;

const SearchBtn = styled.input`
  margin-right: 10pt;
  float: right;
  margin-right: 35pt;
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
        <homeLabel for="gameTypes">I want to play </homeLabel>
        <select onChange={handleChange} name="gameTypes">
          <option value={null}>Game</option>
          {gameType.map((game) => (
            <option key={game.id} value={game.game_type}>
              {game.game_type}
            </option>
          ))}
        </select>
        <homeLabel for="city"> in </homeLabel>
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
        <SearchBtn type="submit" value="Search" />
      </form>
    </Container>
  );
};

export default Search;
