import styled from "styled-components";

export const GlobalHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 100vh;
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
