import React from "react";
import styled from "styled-components";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Card = styled.div`
  padding: 50px;
`;

const BarCard = ({ bar }) => {
  const position = [bar.latitude.toFixed(2), bar.longitude.toFixed(2)];
  console.log(position);
  console.log(bar.latitude.toFixed(2), bar.longitude.toFixed(2));
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
