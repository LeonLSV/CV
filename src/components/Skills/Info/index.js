import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import {
  GlobalInfo,
  Ramiro,
  Contreras,
  TextoP,
  ButtonDownload,
  ButtonRedes,
  ContainerButtons,
} from "./styled";

export const Info = () => {
  return (
    <>
      <GlobalInfo>
        <Ramiro>Ramiro</Ramiro>
        <Contreras>Contreras León</Contreras>
        <TextoP>Nacionalidad: Argentino</TextoP>
        <TextoP>Email: ramiroleon@leonsonidovirtual.com</TextoP>
        <TextoP>Teléfono: 302 228 2334</TextoP>
        <TextoP>Locación: Medellín, Colombia</TextoP>
        <ContainerButtons>
          <ButtonDownload>DESCARGAR CV</ButtonDownload>
          <ButtonRedes>
            <GithubOutlined />
          </ButtonRedes>
          <ButtonRedes>
            <LinkedinOutlined />
          </ButtonRedes>
        </ContainerButtons>
      </GlobalInfo>
    </>
  );
};
