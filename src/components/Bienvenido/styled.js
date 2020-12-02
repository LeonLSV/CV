import styled from "styled-components";

export const Bienvenidos = styled.p`
  width: 60px;
  transform: rotate(-90deg);
  font-size: 12px;
  color: white;
  z-index: 30;
  text-align: center;
  @media (max-width: 376px) {
    display: none;
  }
`;
