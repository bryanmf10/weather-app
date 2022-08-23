import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const Inicio = () => {
    return (
      <Container fluid>
      </Container>
    )
  }

  return (
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  );
}

export default App;
