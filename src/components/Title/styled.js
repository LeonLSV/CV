import styled from "styled-components";

export const GlobalTitle = styled.section`
  margin-top: 100px;
  @media (max-width: 900px) {
    margin-left: -100px;
  }
  @media (max-width: 600px) {
    margin-left: -40px;
  }
  @media (max-width: 460px) {
    margin: 20px 20px;
  }
`;

export const TitleHeader = styled.h1`
  color: #73af5c;
  margin: 0;
  width: 500px;
  font-size: 80px;
  font-weight: bold;
  line-height: 30px;
  @media (max-width: 900px) {
    font-size: 60px;
    line-height: 50px;
    width: 300px;
    margin-top: -100px;
  }
  @media (max-width: 700px) {
    font-size: 50px;
    line-height: 50px;
    margin-top: -190px;
  }
  @media (max-width: 460px) {
    font-size: 30px;
    line-height: 30px;
    margin-top: 0;
  }
`;
export const Title2Header = styled.h1`
  color: white;
  width: 500px;
  margin: 0;
  font-size: 80px;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 60px;
    line-height: 70px;
    width: 300px;
  }
  @media (max-width: 700px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 460px) {
    font-size: 30px;
    line-height: 30px;
    width: 300px;
  }
`;

export const Parrafo = styled.p`
  width: 380px;
  font-size: 15px;
  line-height: 25px;
  color: white;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
  @media (max-width: 700px) {
    font-size: 13px;
    width: 300px;
    line-height: 20px;
    margin-top: 25px;
  }
  @media (max-width: 460px) {
    font-size: 10px;
    width: 200px;
    line-height: 15px;
    margin-top: 25px;
  }
`;

export const Line = styled.div`
  width: 100px;
  height: 1px;
  margin-top: 100px;
  background: #73af5c;
  @media (max-width: 900px) {
    display: none;
  }
`;
