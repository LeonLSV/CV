import React from "react";
import fondoinfo from "../../../images/fondoInfo.png";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import {
  FondoInfo,
  GlobalInfo,
  Ramiro1,
  Contreras1,
  TextoP1,
  ButtonDownload1,
  ButtonRedes1,
  ContainerButtons1,
  AnchorInfo1,
  GlobalFondoInfo,
} from "./styled";

export const InfoFooter = () => {
  return (
    <>
      <GlobalFondoInfo>
        <GlobalInfo>
          <FondoInfo src={fondoinfo} alt="fondoCV" />
          <Ramiro1>Ramiro</Ramiro1>
          <Contreras1>Contreras León</Contreras1>
          <TextoP1>Nacionalidad: Argentino</TextoP1>
          <TextoP1>Email: ramiroleon@leonsonidovirtual.com</TextoP1>
          <TextoP1>Teléfono: 302 228 2334</TextoP1>
          <TextoP1>Locación: Medellín, Colombia</TextoP1>
          <ContainerButtons1>
            <ButtonDownload1>DESCARGAR CV</ButtonDownload1>
            <ButtonRedes1>
              <AnchorInfo1
                href="https://github.com/LeonLSV"
                title="Read complete"
                target="_blank"
                rel="noreferrer">
                <GithubOutlined />
              </AnchorInfo1>
            </ButtonRedes1>
            <ButtonRedes1>
              <AnchorInfo1
                href="https://www.linkedin.com/in/ramiro-contreras-león"
                title="Read complete"
                target="_blank"
                rel="noreferrer">
                <LinkedinOutlined />
              </AnchorInfo1>
            </ButtonRedes1>
          </ContainerButtons1>
        </GlobalInfo>
      </GlobalFondoInfo>
    </>
  );
};
