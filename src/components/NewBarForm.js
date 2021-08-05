import {useState} from "react";
import styled from "styled-components";
import dartImg from "./assets/bar-darts.jpeg";


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  opacity: 0.6;
  z-index: -1;
`;


const FormDiv = styled.div`
  padding-left: 35%;
  padding-right: 33%;
  padding-top: 5%;
  position: fixed;
  
`

const BarForm = styled.form`
  width: 350pt;
  display: grid;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: rgb(71, 109, 158, 0.8);
  padding: 5px;
`

const FormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`
const SubmitBtn = styled.button`
  width: 100%;
  background-color: #476D9E;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 149, 121);
`
const InputLabels = styled.label`
  font-size: 15pt;
  padding: 12px 12px 12px 10px;
  display: inline-block;

`


const NewBarForm = ({bars, setBars}) => {

  const [ barName, setBarName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ city, setCity] = useState('')
  const [ gameType, setGameType] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I was clicked")
    fetch("http://localhost:9292/bars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: barName,
          description: description,
          city: city,
  }),
}).then(res => res.json())
  .then(json => (setBars([...bars, json] ))
    )
  
  }
  
  console.log(barName)
  

  return (
  <div>
    <div>
        <Image src={dartImg} />
    </div>
    <FormDiv>
      <BarForm onSubmit={handleSubmit}>
      <h1>New Form Bar</h1>
      <InputLabels>Name of Bar</InputLabels>
      <FormInput type="text" value={barName} placeholder="Carol's Pub..." onChange={e => setBarName(e.target.value)}/>
      
      <InputLabels>Description</InputLabels>
      <FormInput type="text" value={description} placeholder="Country/Western..." onChange={e => setDescription(e.target.value)}/>
      
      <InputLabels>City</InputLabels>
      <FormInput type="text" value={city} placeholder="Chicago..." onChange={e => setCity(e.target.value)}/>
      
      <InputLabels>Type of Game</InputLabels>
      <FormInput type="text" value={gameType} placeholder="Darts..." onChange={e => setGameType(e.target.value)}/>
      
      <SubmitBtn>Submit</SubmitBtn>
      </BarForm>
    </FormDiv>
    </div>
  );
};

export default NewBarForm;
