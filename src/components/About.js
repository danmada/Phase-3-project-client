import styled from "styled-components";
// import shuffleboard from "./assets/board_front.jpeg"
import arcadeImg from "./assets/arcade_games.jpg";

const ShuffleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 1;
  position: fixed;
`

const aboutTitle = styled.h1`
z-index: 2;
`

const About = () => {
  return (
    <div>
      <ShuffleImg src={arcadeImg}/>
      {/* <aboutTitle>About</aboutTitle> */}
    </div>
  );
};

export default About;
