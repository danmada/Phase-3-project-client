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
const SubmitBtn = styled.button`
  width: 100%;
  background-color: #476d9e;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 149, 121);
  }
`;

const BarCard = ({ bar, handleDelete }) => {
  return (
    <Card>
      <h1>{bar.name}</h1>
      <p>Description: {bar.description}</p>
      <p>Rating: {bar.rating}</p>
      <p>City: {bar.city}</p>
      {bar.bar_game_types.map((type) => (
        <div>{type.game_type} </div>
      ))}
      <SubmitBtn onClick={() => handleDelete(bar.id)}>Delete</SubmitBtn>
    </Card>
  );
};

export default BarCard;
