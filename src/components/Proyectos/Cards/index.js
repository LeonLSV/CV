import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { GlobalCard, Anchor, Titular, ImgProject, Descripcion } from "./styled";

export const Card = (props) => {
  return (
    <>
      <GlobalCard>
        <ImgProject src={props.image} alt="Proyecto1" />
        <Titular>{props.titulo}</Titular>
        <Descripcion>{props.descripcion}</Descripcion>
        <Anchor href={props.href} target="_blank" rel="noreferrer">
          <GithubOutlined style={{ fontSize: "25px" }} />
        </Anchor>
      </GlobalCard>
    </>
  );
};
