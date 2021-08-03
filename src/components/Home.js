import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Home = () => {
  const [gameType, setGameType] = useState([]);
  const [bars, setBars] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [form, setForm] = useState({
    gameTypes: [],
    city: [],
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

    fetch(`http://localhost:9292/bars`)
      .then((res) => res.json())
      .then((json) => setBars(json));
  }, []);
  console.log(form);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const gameTypeResult = await fetch(`http://localhost:9292/game_types`, {
  //       headers: { Accept: "application/json" },
  //     });
  //     const barsResult = await fetch(`http://localhost:9292/bars`, {
  //       headers: { Accept: "application/json" },
  //     });
  //     const parsedGameTypes = await gameTypeResult.json();
  //     const parsedBars = await barsResult.json();

  //     setGameType(parsedGameTypes);
  //     setBars(parsedBars);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {isSearched ? (
        <SearchResults search={search} />
      ) : (
        <Search
          search={search}
          setSearch={setSearch}
          form={form}
          setForm={setForm}
          bars={bars}
          gameType={gameType}
          setIsSearched={setIsSearched}
        />
      )}
    </div>
  );
};

export default Home;
