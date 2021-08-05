import { useState } from "react";
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
  padding-top: 120pt;
  // position: fixed;
`;

const BarForm = styled.form`
  width: 350pt;
  display: grid;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: rgb(71, 109, 158, 0.8);
  padding: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const SubmitBtn = styled.button`
  width: 100%;
  background-color: #476d9e;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 149, 121);
  }
`;
const InputLabels = styled.label`
  font-size: 15pt;
  padding: 12px 12px 12px 10px;
  display: inline-block;
`;

const NewBarForm = ({ bars, setBars, gameType }) => {
  const [newBarForm, setNewBarForm] = useState({
    name: "",
    description: "",
    rating: 10,
    city: "",
    game: "",
    amount: 1,
  });

  const handleChange = (e) => {
    setNewBarForm({
      ...newBarForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I was clicked");
    fetch("http://localhost:9292/bars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBarForm),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(bars);

        setBars([...bars, json]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const reducedCities = (bars) => {
    let cities = bars.map((bar) => bar.city);
    return [...new Set(cities)];
  };

  console.log(newBarForm);

  return (
    <div>
      <Image src={dartImg} alt="dart background" />
      <FormDiv>
        <BarForm onSubmit={handleSubmit}>
          <h1>New Form Bar</h1>
          <InputLabels>Name of Bar</InputLabels>
          <FormInput
            type="text"
            name="name"
            value={newBarForm.name}
            placeholder="Bar Name"
            onChange={handleChange}
          />

          <InputLabels>Description</InputLabels>
          <FormInput
            type="text"
            name="description"
            value={newBarForm.description}
            placeholder="Description"
            onChange={handleChange}
          />
          <InputLabels>Rating: 1 to 10</InputLabels>
          <FormInput
            type="number"
            name="rating"
            value={newBarForm.rating}
            onChange={handleChange}
            min="1"
            max="10"
          />

          <InputLabels>City</InputLabels>
          <select onChange={handleChange} name="city">
            <option value={null}>City</option>

            {reducedCities(bars).map((bar) => {
              return (
                <option key={bar} value={bar}>
                  {bar}
                </option>
              );
            })}
          </select>

          <InputLabels>Type of Game</InputLabels>
          <select onChange={handleChange} name="game">
            <option value={null}>Game</option>
            {gameType.map((game) => (
              <option key={game.id} value={game.id}>
                {game.game_type}
              </option>
            ))}
          </select>
          <InputLabels>How many games available?</InputLabels>
          <FormInput
            type="number"
            name="amount"
            value={newBarForm.amount}
            onChange={handleChange}
            min="1"
            max="10"
          />
          <SubmitBtn>Submit</SubmitBtn>
        </BarForm>
      </FormDiv>
    </div>
  );
};

export default NewBarForm;
