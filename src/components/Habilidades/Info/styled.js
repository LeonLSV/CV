import styled from "styled-components";

export const GlobalInfo = styled.div`
  color: black;
  width: auto;
  margin-left: 100px;
  margin-top: -200px;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: -50px;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-top: -0px;
    margin: 0 auto;
  }
`;

export const Ramiro = styled.h1`
  font-weight: bold;
  font-size: 2.7rem;
  margin: 0;
  padding: 0;
  @media (max-width: 460px) {
    font-size: 1.3rem;
    width: 200px;
    display: flex;
    justify-content: center;
  }
`;
export const Contreras = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2.7rem;
  font-weight: normal;
  margin-top: -1.5rem;
  @media (max-width: 460px) {
    font-size: 1.3rem;
    margin-top: -6px;
    width: 200px;
    display: flex;
    justify-content: center;
  }
`;

export const TextoP = styled.p`
  margin-top: 10px;
  padding: 0;
  font-weight: 600;
  margin-bottom: 0;
  @media (max-width: 460px) {
    font-size: 0.9rem;
    width: 290px;
    margin-top: 2px;
    display: flex;
    justify-content: center;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 460px) {
    width: 220px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
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
  @media (max-width: 460px) {
    height: 40px;
    width: 150px;
    margin-top: 0px;
    font-size: 10px;
  }
`;
export const ButtonRedes = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 25px;
  margin-top: 29px;
  margin-left: 5px;
  @media (max-width: 460px) {
    margin-top: 0px;
    font-size: 25px;
  }
`;

export const AnchorInfo = styled.a`
  text-decoration: none;
  outline: none;
  color: black;
  &:hover {
    color: #73af5c;
  }
`;
