import styled from "styled-components";

export const Bienvenidos = styled.p`
  width: 100px;
  transform: rotate(-90deg);
  font-size: 18px;
  color: white;
  z-index: 30;
  text-align: center;

  @media (max-width: 992px) {
    display: none;
  }
`;
