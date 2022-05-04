import { useEffect, useState } from "react";
import Card from "./components/Card";
import peliculas from "./services/peliculas";
import "./styles.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Cabecera = styled.h1`
  text-transform: uppercase;
  color: #ffd86f;
`;

const App = () => {
  const [pelis, setPelis] = useState([]);
  function mostrarPelis() {
    peliculas.get().then((resp) => {
      setPelis(resp.data.results);
    });
  }

  useEffect(() => {
    mostrarPelis();
  });

  return (
    <div className="App">
      <Cabecera>pelis estreno</Cabecera>
      <Container>
        {pelis.map((pelicula) => {
          return <Card {...pelicula} />;
        })}
      </Container>
    </div>
  );
};
export default App;
