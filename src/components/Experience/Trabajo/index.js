import React from "react";
import {
  LineTrabajo,
  TituloTrabajo,
  SubtituloTrabajo,
  DescripcionTrabajo,
  AñoTrabajo,
} from "./styled";

export const Trabajo = (props) => {
  return (
    <>
      <AñoTrabajo>{props.año}</AñoTrabajo>
      <LineTrabajo></LineTrabajo>
      <div>
        <TituloTrabajo>{props.titulo}</TituloTrabajo>
        <SubtituloTrabajo>{props.subtitulo}</SubtituloTrabajo>
        <DescripcionTrabajo>{props.descripcion}</DescripcionTrabajo>
      </div>
    </>
  );
};
