// import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import dartImg from "./assets/bar-darts.jpeg";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  top: 0;
  opacity: 0.6;
  z-index: -1;
`;

const Container = styled.div`
  background-image: url(dartImg);
`;

const FormDiv = styled.div`
  padding-left: 35%;
  padding-right: 33%;
  padding-top: 5vh;
  position: absolute;
`;

const BarForm = styled.form`
  color: white;
  width: 450pt;
  display: grid;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: rgb(71, 109, 158, 0.8);
  padding: 5px;
  margin-bottom: 10%;
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
  border: 2px solid #ccc;
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

const Link = styled.a`
  color: red;
`;

const NewBarForm = ({ bars, setBars, gameType }) => {
  const { register, errors, handleSubmit } = useForm();

  const submission = (data) => {
    if (data.city === null || data.game === null || data.amount === null) {
      alert("Please select a city and or game!");
    }

    fetch("http://localhost:9292/bars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
  console.log(errors);

  return (
    <Container>
      <Image src={dartImg} alt="dart background" />
      <FormDiv>
        <BarForm onSubmit={handleSubmit(submission)}>
          <h1>New Form Bar</h1>
          <InputLabels>Name of Bar</InputLabels>
          <FormInput
            type="text"
            {...register("name", { required: true, maxLength: 200 })}
            placeholder="Bar Name"
          />

          <InputLabels>Description</InputLabels>
          <FormInput
            type="text"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <InputLabels>Rating: 1 to 10</InputLabels>
          <FormInput
            type="number"
            {...register("rating", { required: true })}
            min="1"
            max="10"
            placeholder="10"
          />

          <InputLabels>City</InputLabels>
          <select {...register("city", { required: true })}>
            <option value={null}>City</option>

            {reducedCities(bars).map((bar) => {
              return (
                <option key={bar} value={bar}>
                  {bar}
                </option>
              );
            })}
          </select>
          <InputLabels>Latitude and Longitude</InputLabels>
          <FormInput
            type="text"
            {...register("latitude", {
              required: true,
              maxLength: 18,
              minLength: 4,
            })}
            placeholder="Latitude"
          />
          <FormInput
            type="text"
            {...register("longitude", {
              required: true,
              maxLength: 18,
              minLength: 4,
            })}
            placeholder="Longitude"
          />
          <label for="latitude">
            Geocoding is expensive, please consult{" "}
            <Link
              href="https://www.google.com/maps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </Link>
            .
          </label>

          <InputLabels>Type of Game</InputLabels>
          <select {...register("game", { required: true })}>
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
            {...register("amount", { required: true })}
            min="1"
            max="10"
            placeholder="1"
          />
          <SubmitBtn>Submit</SubmitBtn>
        </BarForm>
      </FormDiv>
    </Container>
  );
};

export default NewBarForm;
