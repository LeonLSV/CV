import React from "react";
import {
  LineEstudio,
  TituloEstudio,
  SubtituloEstudio,
  DescripcionEstudio,
  AñoEstudio,
} from "./styled";

export const ListEstudio = (props) => {
  return (
    <>
      <AñoEstudio>{props.año}</AñoEstudio>
      <LineEstudio></LineEstudio>
      <div>
        <TituloEstudio>{props.titulo}</TituloEstudio>
        <SubtituloEstudio>{props.subtitulo}</SubtituloEstudio>
        <DescripcionEstudio>{props.descripcion}</DescripcionEstudio>
      </div>
    </>
  );
};
