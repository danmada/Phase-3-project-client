import React from "react";
import styled from "styled-components";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Card = styled.div`
  padding: 50px;
`;
const ChartBox = styled.div`
  height: 300px;
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

      <ChartBox>
        {/* <MapContainer
          className="map-container"
          center={position}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </ChartBox>
    </Card>
  );
};

export default BarCard;
