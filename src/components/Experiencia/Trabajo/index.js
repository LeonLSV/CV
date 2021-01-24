import React from "react";
import {
  LineTrabajo,
  TituloTrabajo,
  SubtituloTrabajo,
  DescripcionTrabajo,
  AñoTrabajo,
  GlobalExperiencias,
} from "./styled";
import { AnchorInfo } from "../../Habilidades/Info/styled.js";

export const Trabajo = (props) => {
  return (
    <>
      <GlobalExperiencias>
        <AñoTrabajo>{props.año}</AñoTrabajo>
        <LineTrabajo></LineTrabajo>
        <div>
          <TituloTrabajo>
            <AnchorInfo href={props.linktitle} target="_blank" rel="noreferrer">
              {props.titulo}
            </AnchorInfo>
          </TituloTrabajo>
          <SubtituloTrabajo>{props.subtitulo}</SubtituloTrabajo>
          <DescripcionTrabajo>{props.descripcion}</DescripcionTrabajo>
        </div>
      </GlobalExperiencias>
    </>
  );
};
