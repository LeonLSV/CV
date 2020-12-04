import React from "react";
import {
  LineTrabajo,
  TituloTrabajo,
  SubtituloTrabajo,
  DescripcionTrabajo,
  AñoTrabajo,
  GlobalExperiencias,
} from "./styled";

export const Trabajo = (props) => {
  return (
    <>
      <GlobalExperiencias>
        <AñoTrabajo>{props.año}</AñoTrabajo>
        <LineTrabajo></LineTrabajo>
        <div>
          <TituloTrabajo>{props.titulo}</TituloTrabajo>
          <SubtituloTrabajo>{props.subtitulo}</SubtituloTrabajo>
          <DescripcionTrabajo>{props.descripcion}</DescripcionTrabajo>
        </div>
      </GlobalExperiencias>
    </>
  );
};
