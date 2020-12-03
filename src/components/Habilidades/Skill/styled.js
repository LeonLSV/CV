import styled from "styled-components";

export const GlobalLi = styled.li`
  list-style: none;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.1fr 1fr 0.1fr 1fr;
  margin-right: 100px;
  margin-top: -200px;
  @media (max-width: 1120px) {
    margin-right: 0px;
  }
  @media (max-width: 992px) {
    margin: 0;
    margin-top: -70px;
    margin-bottom: 80px;
  }
`;

export const TextUl = styled.h4`
  font-weight: bold;
  text-align: center;
  grid-column-start: ${(props) => props.colstart};
  grid-column-end: ${(props) => props.colend};
  grid-row-start: ${(props) => props.rowstart};
  grid-row-end: ${(props) => props.rowend};
  margin: 20px;
  justify-self: center;
  align-self: center;
  @media (max-width: 992px) {
    font-size: 12px;
  }
`;
export const LineaVerde = styled.div`
  background: #73af5c;
  width: 100%;
  height: 1.5px;
  grid-column-start: ${(props) => props.colstart1} !important;
  grid-column-end: ${(props) => props.colend1} !important;
  grid-row-start: ${(props) => props.rowstart1};
  grid-row-end: ${(props) => props.rowend1};
`;
