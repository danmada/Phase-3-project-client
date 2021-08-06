import React from "react";
import styled from "styled-components";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Card = styled.div`
  background-color: rgb(71, 109, 158, 0.9);
  padding: 50px;
  font-size: 15pt;
  border-radius: 4px;
  color: white;
  
`;

const BarCard = ({ bar }) => {
  return (
    <Card>
      <h1>{bar.name}</h1>
      <p>Description: {bar.description}</p>
      <p>Rating: {bar.rating}</p>
      <p>City: {bar.city}</p>
      {bar.bar_game_types.map((type) => (
        <div>{type.game_type} </div>
      ))}
    </Card>
  );
};

export default BarCard;
