import styled from "styled-components";

export const GlobalExperiencias = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LineTrabajo = styled.div`
  width: 100px;
  height: 2px;
  background: #73af5c;
  margin: 0 30px;
  margin-top: 60px;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const AñoTrabajo = styled.h3`
  font-size: 20px;
  margin: 0;
  color: black;
  margin-top: 40px;
  width: 100px;
  @media (max-width: 460px) {
    font-size: 17px;
    margin-top: 20px;
  }
`;
export const TituloTrabajo = styled.h1`
  font-size: 21px;
  margin: 0;
  font-weight: 600;
  color: black;
  margin-top: 40px;
  width: 500px;
  @media (max-width: 460px) {
    font-size: 15px;
    width: 350px;
    margin-top: 20px;
  }
`;

export const SubtituloTrabajo = styled.h4`
  font-size: 17px;
  margin: 0;
  color: black;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`;

export const DescripcionTrabajo = styled.h1`
  font-size: 15px;
  margin: 0;
  font-weight: normal;
  max-width: 350px;
  margin-top: 15px;
  color: black;
  @media (max-width: 460px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;
