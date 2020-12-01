import styled from "styled-components";

export const GlobalExperience = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-template-rows: 70vh;
  background: #e6e6e6;
  section {
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: center;
  }
`;
