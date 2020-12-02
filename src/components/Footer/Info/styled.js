import styled from "styled-components";

export const GlobalFondoInfo = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const GlobalInfo = styled.div`
  color: white;
  margin-top: -200px;
`;

export const FondoInfo = styled.img`
  width: 80%;
  position: absolute;
  z-index: 1;
  margin: -80px auto;
`;

export const Ramiro = styled.h1`
  font-weight: bold;
  font-size: 2.7rem;
  margin: 0;
  padding: 0;
  color: white;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
`;
export const Contreras = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2.7rem;
  font-weight: normal;
  margin-top: -1.5rem;
  color: white;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
`;

export const TextoP = styled.p`
  margin-top: 10px;
  padding: 0;
  font-weight: 600;
  margin-bottom: 0;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
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
  color: white;
  &:hover {
    color: #73af5c;
  }
`;
