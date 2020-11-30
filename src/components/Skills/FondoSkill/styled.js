import styled from "styled-components";

export const GlobalFondoSkills = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr;
  grid-template-rows: 100vh;
  background: #e6e6e6;
  div {
    grid-column-start: 2;
    grid-column-end: 3;
    align-self: center;
  }
  p {
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: center;
  }
  li {
    grid-column-start: 3;
    grid-column-end: 4;
    align-self: center;
  }
`;
