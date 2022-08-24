import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import WeatherController from './controllers/WeatherController';
import styled from "styled-components";

const WeatherList = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

const App = () => {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    WeatherController.getAll().then(data => {
      setWeatherList(data)
    }).catch(err => console.log(err));
  }, []);

  return (
    <Container fluid>
      <WeatherList>
        <select>
          {weatherList.map((elem) => <option key={elem.location.id} >{elem.location.city}, {elem.location.country} </option>)}
        </select>
      </WeatherList>
    </Container>
  )
}

export default App;
