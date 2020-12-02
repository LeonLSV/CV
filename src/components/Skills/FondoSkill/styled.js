import styled from "styled-components";

export const GlobalFondoSkills = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr;
  grid-template-rows: 100vh;
  background: #e6e6e6;
  @media (max-width: 376px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  div {
    grid-column-start: 2;
    grid-column-end: 3;
    align-self: center;
    @media (max-width: 376px) {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 2;
    }
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
    @media (max-width: 376px) {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
`;
