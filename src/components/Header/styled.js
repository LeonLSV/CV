import styled from "styled-components";

export const GlobalHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 100vh;
  @media (max-width: 972px) {
    grid-template-rows: 80vh;
  }
  @media (max-width: 900px) {
    grid-template-rows: 70vh;
  }
  @media (max-width: 812px) {
    grid-template-rows: 80vh;
  }
  //nuevo
  @media (max-width: 681px) {
    grid-template-rows: 60vh;
  }
  @media (max-width: 610px) {
    grid-template-rows: 50vh;
  }
  @media (max-width: 490px) {
    grid-template-rows: 45vh;
  }
  @media (max-width: 440px) {
    grid-template-rows: 40vh;
  }
  @media (max-width: 393px) {
    grid-template-rows: 30vh;
  }
  p {
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: center;
  }
  section {
    grid-column-start: 2;
    grid-column-end: 3;
    align-self: center;
  }
`;
