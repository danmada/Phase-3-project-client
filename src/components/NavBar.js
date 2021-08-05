import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import dartImg from "./assets/icons8-billiards-150.png";

const Nav = styled.div`
  color: white;
  background-color: black;
  position: relative;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  z-index: 100;
  position: fixed;
`;

const Title = styled.h1`
  font-size: 50px;
  padding-left: 5%;
  padding-top: 2%;
`

const Icon = styled.img`
  margin: 0;
  width: 35pt;
  height: 45pt;
  padding-top: 15pt;
  
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const GridItem = styled.div`
  font-size: 15pt;
  height: 100px;
  width: auto;
  position: relative;
  align-content: center;
  text-align: center;
  margin-top: 20%;
`;
const Burger = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5%;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Nav>
      
      <Title>
      <Icon src={dartImg}></Icon>
      Pub Game Finder
      </Title>

      {click ? (
        <Container>
          <GridItem>
            <a>
              <svg
                width="50"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                onClick={handleClick}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H4.75"
                ></path>
              </svg>
            </a>
          </GridItem>
          <GridItem>
            <NavLink to="/"> Home</NavLink>
          </GridItem>
          <GridItem>
            <NavLink to="/form"> Add New Bar</NavLink>
          </GridItem>
          <GridItem>
            <NavLink to="/about"> About</NavLink>
          </GridItem>
        </Container>
      ) : (
        <Burger>
          <a>
            <svg
              id="burger-menu"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 24 24"
              onClick={handleClick}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75H19.25"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 18.25H19.25"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 12H19.25"
              />
            </svg>
          </a>
        </Burger>
      )}
    </Nav>
  );
};

export default NavBar;
