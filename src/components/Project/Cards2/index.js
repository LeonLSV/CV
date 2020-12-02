import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import {
  GlobalCard2,
  Titular,
  ImgProject,
  Descripcion,
  Anchor2,
} from "./styled";

export const Card2 = () => {
  return (
    <>
      <GlobalCard2>
        <ImgProject src="" alt="Proyecto1" />
        <Titular>Petgram</Titular>
        <Descripcion>Instagram de animales</Descripcion>
        <Anchor2
          href="https://github.com/LeonLSV/ReactAvanzado"
          target="_blank"
          rel="noreferrer">
          <GithubOutlined style={{ fontSize: "20px" }} />
        </Anchor2>
      </GlobalCard2>
    </>
  );
};
