import React from "react";
import styled from "styled-components";
import { Rating } from "semantic-ui-react";

const Card = styled.div`
  padding: 50px;
`;

const BarCard = ({ bar }) => {
  return (
    <Card>
      <h1>{bar.name}</h1>
      <p>Description: {bar.description}</p>
      <p>Rating: {bar.rating}</p>
      <p>City: {bar.city}</p>
      {bar.bar_game_types.map((type) => (
        <div>{type.game_type}</div>
      ))}
    </Card>
  );
};

export default BarCard;
