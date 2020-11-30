import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { GlobalCard, Anchor, Titular, ImgProject, Descripcion } from "./styled";
import proyecto1 from "../../../images/always.jpeg";

export const Card = () => {
  return (
    <>
      <GlobalCard>
        <ImgProject src={proyecto1} alt="Proyecto1" />
        <Titular>Always Update</Titular>
        <Descripcion>Diario digital Scraping</Descripcion>
        <Anchor href="https://github.com/LeonLSV/DiarioDigital">
          <GithubOutlined style={{ fontSize: "20px" }} />
        </Anchor>
      </GlobalCard>
    </>
  );
};
