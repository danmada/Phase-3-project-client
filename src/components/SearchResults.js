import React, { useState } from "react";
import styled from "styled-components";
import BarCard from "./BarCard";
import Search from "./Search";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
  height: 10%;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.div`
  align-content: center;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
  font-size: 25px;
  width: 100%;
  height: 20%;
  border: 1px solid;
  border-radius: 5px;
  &:hover {
    color: rgb(0, 149, 121);
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }
`;

const SearchResults = ({ search }) => {
  const [active, setActive] = useState(search[0]);
  console.log(active);

  const handleClick = (e) => {
    search.map((bar) => {
      if (e.target.innerText === bar.name) {
        setActive(bar);
      }
    });
  };

  return (
    <div>
      <Container>
        <List>
          <Title>Bars:</Title>
          {search.map((bar) => {
            return (
              <ListItem
                className={active.id === bar.id ? "active" : "none"}
                key={bar.id}
                onClick={handleClick}
              >
                {bar.name}
              </ListItem>
            );
          })}
        </List>
        <BarCard bar={active} />
      </Container>
    </div>
  );
};

export default SearchResults;
