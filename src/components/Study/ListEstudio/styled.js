import styled from "styled-components";
import { fadeInRight } from "../../../animation/animation";

export const GlobalListEstudio = styled.div`
  ${fadeInRight({ time: "2s" })}
  display: flex;
  flex-direction: row;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LineEstudio = styled.div`
  width: 100px;
  height: 2px;
  background: #73af5c;
  margin: 0 30px;
  margin-top: 40px;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const AñoEstudio = styled.h3`
  font-size: 20px;
  margin: 0;
  color: black;
  margin-top: 20px;
  width: 100px;
  @media (max-width: 528px) {
    font-size: 17px;
    margin-top: 20px;
  }
`;
export const TituloEstudio = styled.h1`
  font-size: 21px;
  margin: 0;
  font-weight: 600;
  color: black;
  margin-top: 20px;
  width: 500px;
  @media (max-width: 528px) {
    font-size: 15px;
    width: 350px;
    margin-top: 20px;
  }
`;

export const SubtituloEstudio = styled.h4`
  font-size: 17px;
  margin: 0px 0;
  color: black;
  @media (max-width: 528px) {
    font-size: 15px;
  }
`;

export const DescripcionEstudio = styled.h1`
  font-size: 15px;
  margin: 0;
  font-weight: normal;
  max-width: 350px;
  margin-top: 15px;
  color: black;
  @media (max-width: 528px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;
