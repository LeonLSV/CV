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
import { Tooltip } from "antd";

const textPDF = <span>Descarga mi CV en PDF</span>;
const github = <span>Ingresa a mi GitHub</span>;
const linkedin = <span>Ingresa a mi perfil de Linkedin</span>;

export const Info = () => {
  return (
    <>
      <GlobalInfo>
        <Ramiro>Ramiro</Ramiro>
        <Contreras>Contreras León</Contreras>
        <TextoP>Nacionalidad: Argentino</TextoP>
        <TextoP>Email: ramiroleon@leonsonidovirtual.com</TextoP>
        <TextoP>Locación: Medellín, Colombia</TextoP>
        <ContainerButtons>
          <Tooltip placement="bottom" title={textPDF}>
            <AnchorInfo
              href="https://leonsonidovirtual.com/wp-content/uploads/2021/01/CV_RamiroContrerasLeon.pdf"
              target="_blank"
              rel="noreferrer">
              <ButtonDownload>DESCARGAR CV</ButtonDownload>
            </AnchorInfo>
          </Tooltip>
          <ButtonRedes>
            <Tooltip placement="bottom" title={github}>
              <AnchorInfo
                href="https://github.com/LeonLSV"
                target="_blank"
                rel="noreferrer">
                <GithubOutlined />
              </AnchorInfo>
            </Tooltip>
          </ButtonRedes>
          <ButtonRedes>
            <Tooltip placement="bottom" title={linkedin}>
              <AnchorInfo
                href="https://www.linkedin.com/in/ramiro-contreras-león"
                target="_blank"
                rel="noreferrer">
                <LinkedinOutlined />
              </AnchorInfo>
            </Tooltip>
          </ButtonRedes>
        </ContainerButtons>
      </GlobalInfo>
    </>
  );
};
