import styled from "styled-components";

export const GlobalFondoInfo = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 460px) {
    margin: 0 0;
  }
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
  @media (max-width: 460px) {
    margin: -10px auto;
    width: 100%;
  }
`;

export const Ramiro1 = styled.h1`
  font-weight: bold;
  font-size: 2.7rem;
  margin: 0;
  padding: 0;
  color: white;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
  @media (max-width: 460px) {
    font-size: 1rem;
    width: 200px;
    margin-left: 20px;
  }
`;
export const Contreras1 = styled.h2`
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
  @media (max-width: 460px) {
    font-size: 1rem;
    margin-top: -6px;
    width: 200px;
    margin-left: 20px;
  }
`;

export const TextoP1 = styled.p`
  margin-top: 10px;
  padding: 0;
  font-weight: 600;
  margin-bottom: 0;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
  @media (max-width: 460px) {
    font-size: 0.6rem;
    width: 200px;
    margin-left: 20px;
    margin-top: 2px;
  }
`;

export const ContainerButtons1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  margin-left: 100px;
  position: relative;
  z-index: 20;
  @media (max-width: 460px) {
    font-size: 0.5rem;
    width: 200px;
    margin-left: 20px;
    margin-top: 5px;
  }
`;
export const ButtonDownload1 = styled.button`
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
  @media (max-width: 460px) {
    width: 105px;
    height: 25px;
    margin-top: 0px;
  }
`;
export const ButtonRedes1 = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 25px;
  margin-top: 29px;
  margin-left: 5px;
  @media (max-width: 460px) {
    margin-top: 0px;
    font-size: 15px;
  }
`;

export const AnchorInfo1 = styled.a`
  text-decoration: none;
  outline: none;
  color: white;
  &:hover {
    color: #73af5c;
  }
`;
