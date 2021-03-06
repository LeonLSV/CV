import styled from "styled-components";
import { fadeIn } from "../../../animation/animation";

export const GlobalCard = styled.section`
  ${fadeIn({ time: "3s" })}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgProject = styled.img`
  width: 350px;
  border-radius: 30px;
`;
export const Titular = styled.h3`
  margin: 10px;
  padding-top: 10px;
  color: white;
`;

export const Descripcion = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-size: 13px;
  color: white;
`;

export const Anchor = styled.a`
  text-decoration: none;
  outline: none;
  color: white;
  &:hover {
    color: #73af5c;
  }
`;
