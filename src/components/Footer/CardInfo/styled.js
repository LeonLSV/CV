import styled from "styled-components";

export const FondoFooter = styled.div`
  background: #e6e6e6;
  width: 100%;
  height: 50vh;
  position: relative;
  z-index: -2;
  margin-top: -1px;
  @media (max-width: 1246px) {
    display: none;
  }
`;
export const FondoFooter2 = styled.div`
  position: relative;
  z-index: -2;
  background: #0f0f0f;
  width: 100%;
  height: 400px;
  margin-top: -150px;
  @media (max-width: 1246px) {
    height: 200px;
  }
`;

export const TextFooter = styled.p`
  background: #0f0f0f;
  color: white;
  margin: 0;
  padding: 0;
  text-align: center;
  padding: 20px;
  border: none;
  margin-top: -1px;
`;
