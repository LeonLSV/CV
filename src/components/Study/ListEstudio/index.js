import React from "react";
import {
  LineEstudio,
  TituloEstudio,
  SubtituloEstudio,
  DescripcionEstudio,
  AñoEstudio,
  GlobalListEstudio,
} from "./styled";
import { AnchorInfo } from "../../Habilidades/Info/styled.js";

export const ListEstudio = (props) => {
  return (
    <>
      <GlobalListEstudio>
        <AñoEstudio>{props.año}</AñoEstudio>
        <LineEstudio></LineEstudio>
        <div>
          <TituloEstudio>
            <AnchorInfo
              href={props.linktitle}
              title="Read more"
              target="_blank"
              rel="noreferrer">
              {props.titulo}
            </AnchorInfo>
          </TituloEstudio>
          <SubtituloEstudio>{props.subtitulo}</SubtituloEstudio>
          <DescripcionEstudio>{props.descripcion}</DescripcionEstudio>
        </div>
      </GlobalListEstudio>
    </>
  );
};
