import styled from "styled-components";

export const GlobalInfo = styled.div`
  color: black;
  width: 100%;
`;

export const Ramiro = styled.h1`
  font-weight: bold;
  font-size: 2.7rem;
  margin: 0;
  padding: 0;
`;
export const Contreras = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2.7rem;
  font-weight: normal;
  margin-top: -1.5rem;
`;

export const TextoP = styled.p`
  margin-top: 10px;
  padding: 0;
  font-weight: 600;
  margin-bottom: 0;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonDownload = styled.button`
  outline: none;
  background: linear-gradient(90deg, #559b65, #94c453);
  border: none;
  width: 165px;
  height: 50px;
  border-radius: 31px;
  color: white;
  margin-top: 29px;
  cursor: pointer;
  margin-right: 10px;
`;
export const ButtonRedes = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 25px;
  margin-top: 29px;
  margin-left: 5px;
`;

export const AnchorInfo = styled.a`
  text-decoration: none;
  outline: none;
  color: black;
  &:hover {
    color: #73af5c;
  }
`;
