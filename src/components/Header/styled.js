import styled from "styled-components";

export const GlobalHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 100vh;

  @media (max-width: 1024px) {
    grid-template-rows: 500px;
  }
  //IpadPro
  @media (max-width: 768px) {
    grid-template-rows: 400px;
  }
  //Ipad
  @media (max-width: 540px) {
    grid-template-rows: 350px;
  }
  //SurfaceDuo
  @media (max-width: 415px) {
    grid-template-rows: 300px;
  }
  //Pixel2
  @media (max-width: 393px) {
    grid-template-rows: 250px;
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
