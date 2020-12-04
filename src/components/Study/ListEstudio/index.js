import React from "react";
import {
  LineEstudio,
  TituloEstudio,
  SubtituloEstudio,
  DescripcionEstudio,
  AñoEstudio,
  GlobalListEstudio,
} from "./styled";

export const ListEstudio = (props) => {
  return (
    <>
      <GlobalListEstudio>
        <AñoEstudio>{props.año}</AñoEstudio>
        <LineEstudio></LineEstudio>
        <div>
          <TituloEstudio>{props.titulo}</TituloEstudio>
          <SubtituloEstudio>{props.subtitulo}</SubtituloEstudio>
          <DescripcionEstudio>{props.descripcion}</DescripcionEstudio>
        </div>
      </GlobalListEstudio>
    </>
  );
};
