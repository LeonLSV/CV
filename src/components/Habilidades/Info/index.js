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
  AnchorInfo,
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
            <AnchorInfo
              href="https://github.com/LeonLSV"
              title="Read complete"
              target="_blank"
              rel="noreferrer">
              <GithubOutlined />
            </AnchorInfo>
          </ButtonRedes>
          <ButtonRedes>
            <AnchorInfo
              href="https://www.linkedin.com/in/ramiro-contreras-león"
              title="Read complete"
              target="_blank"
              rel="noreferrer">
              <LinkedinOutlined />
            </AnchorInfo>
          </ButtonRedes>
        </ContainerButtons>
      </GlobalInfo>
    </>
  );
};
