import styled from "styled-components";

export const GlobalProject = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.9fr 1fr;
  grid-template-rows: 80vh;
  background: black;
  p {
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: center;
  }
  section {
    grid-column-start: 2;
    grid-column-end: 3;
    align-self: center;
    justify-content: center;
  }
  div {
    grid-column-start: 3;
    grid-column-end: 4;
    align-self: center;
    justify-content: center;
  }
`;
