import React, { useState } from "react";
import styled from "styled-components";
import BarCard from "./BarCard";
import Search from "./Search";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import arcadeImg from "./assets/arcade_games.jpg"

const Container = styled.div`
  padding-top: 19pt;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 40% 30%;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
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
  border: 2px solid #ccc;
  border-radius: 4px;
  &:hover {
    color: rgb(0, 149, 121);
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  opacity: 0.3;
  z-index: -1;
`

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
      <Image src={arcadeImg}></Image>
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

        <MapContainer
          className="map-container"
          center={[active.latitude.toFixed(3), active.longitude.toFixed(3)]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {search.map((bar) => {
              return (
                <Marker
                  position={[bar.latitude.toFixed(3), bar.longitude.toFixed(3)]}
                >
                  <Popup>
                    {bar.name}: {bar.rating}/10
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      </Container>
    </div>
  );
};

export default SearchResults;
