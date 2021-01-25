import styled from "styled-components";

export const ContenedorSider = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const ContenedorCol = styled.div`
  margin: 30px;
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

export const MarginFooter = styled.div`
  margin-top: 7px;
  display: none;
  @media (max-width: 1025px) {
    margin-top: -15px;
    background: #e6e6e6;
    height: 60px;
    width: 100%;
    display: inline;
  }
  @media (max-width: 769px) {
    margin-top: -5px;
    background: #e6e6e6;
    height: 60px;
    width: 100%;
    display: inline;
  }
  @media (max-width: 540px) {
    margin-top: 0px;
    background: #e6e6e6;
    height: 60px;
    width: 100%;
    display: inline;
  }
  @media (max-width: 415px) {
    margin-top: 0;
    background: #e6e6e6;
    height: 60px;
    width: 100%;
    display: inline;
  }
`;
