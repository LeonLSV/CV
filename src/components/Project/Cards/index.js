import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { GlobalCard, Anchor, Titular, ImgProject, Descripcion } from "./styled";

export const Card = () => {
  return (
    <>
      <GlobalCard>
        <ImgProject src="" alt="Proyecto1" />
        <Titular>Always Update</Titular>
        <Descripcion>Diario digital Scraping</Descripcion>
        <Anchor
          href="https://github.com/LeonLSV/DiarioDigital"
          target="_blank"
          rel="noreferrer">
          <GithubOutlined style={{ fontSize: "20px" }} />
        </Anchor>
      </GlobalCard>
    </>
  );
};
