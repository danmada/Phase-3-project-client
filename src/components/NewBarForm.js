import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const BarForm = styled.form`
  width: 500pt;
  display: grid;
  align-content: center;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 5px;
`;

const FormInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const SubmitBtn = styled.button`
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const InputLabels = styled.label`
  font-size: 12pt;
  padding: 12px 12px 12px 0;
  display: inline-block;
`;

const NewBarForm = ({ bars, setBars }) => {
  const [barName, setBarName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [gameType, setGameType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I was clicked");
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
    })
      .then((res) => res.json())
      .then((json) => setBars([...bars, json]));
  };

  console.log(barName);

  return (
    <Container>
      <BarForm onSubmit={handleSubmit}>
        <h1>New Form Bar</h1>
        <InputLabels>Name of Bar</InputLabels>
        <FormInput
          type="text"
          value={barName}
          placeholder="Bar Name"
          onChange={(e) => setBarName(e.target.value)}
        />

        <InputLabels>Description</InputLabels>
        <FormInput
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <InputLabels>City</InputLabels>
        <FormInput
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />

        <InputLabels>Type of Game</InputLabels>
        <FormInput
          type="text"
          value={gameType}
          placeholder="Game Type"
          onChange={(e) => setGameType(e.target.value)}
        />

        <SubmitBtn>Submit</SubmitBtn>
      </BarForm>
    </Container>
  );
};

export default NewBarForm;
