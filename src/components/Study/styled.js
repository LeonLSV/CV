import styled from "styled-components";

export const ContenedorSider = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const ContenedorCol = styled.div`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;
export const ContenedorRow = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 992px) {
    display: grid;
    justify-content: center;
  }
`;
