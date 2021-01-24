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

import { Tooltip } from "antd";

const textPDF = <span>Descarga mi CV en PDF</span>;
const github = <span>Ingresa a mi GitHub</span>;
const linkedin = <span>Ingresa a mi perfil de Linkedin</span>;

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
          {/* <TextoP1>Teléfono: 302 228 2334</TextoP1> */}
          <TextoP1>Locación: Medellín, Colombia</TextoP1>
          <ContainerButtons1>
            <Tooltip placement="bottom" title={textPDF}>
              <AnchorInfo1
                href="https://leonsonidovirtual.com/wp-content/uploads/2020/12/CV_RamiroContrerasLeon.pdf"
                target="_blank"
                rel="noreferrer">
                <ButtonDownload1>DESCARGAR CV</ButtonDownload1>
              </AnchorInfo1>
            </Tooltip>
            <ButtonRedes1>
              <Tooltip placement="bottom" title={github}>
                <AnchorInfo1
                  href="https://github.com/LeonLSV"
                  target="_blank"
                  rel="noreferrer">
                  <GithubOutlined />
                </AnchorInfo1>
              </Tooltip>
            </ButtonRedes1>
            <ButtonRedes1>
              <Tooltip placement="bottom" title={linkedin}>
                <AnchorInfo1
                  href="https://www.linkedin.com/in/ramiro-contreras-león"
                  target="_blank"
                  rel="noreferrer">
                  <LinkedinOutlined />
                </AnchorInfo1>
              </Tooltip>
            </ButtonRedes1>
          </ContainerButtons1>
        </GlobalInfo>
      </GlobalFondoInfo>
    </>
  );
};
