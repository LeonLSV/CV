import React from "react";
import { Experiencias, GridTrabajos } from "./styled";
import { Trabajo } from "../Trabajo";

export const Experiencia = () => {
  return (
    <>
      <Experiencias>EXPERIENCIA</Experiencias>
      <GridTrabajos>
        <Trabajo
          año="2018/2020"
          titulo="Shows en Vivo | Argentina, Guatemala, Colombia"
          subtitulo="Ingeniero de Sonido"
          descripcion="Ingeniero de Sonido con artistas como: Manuel Turizo (Col), Dios Salve a la Reina (Arg), Benjamin Amadeo (Arg), Gaby Moreno (Gt)"
        />
        <Trabajo
          año="2018"
          titulo="Blessure | Guatemala"
          subtitulo="Director del Departamento de Audio"
          descripcion="Lider del área de Audio dirigiendo la organización y logística de los eventos y capacitando al personal a cargo"
        />
      </GridTrabajos>
    </>
  );
};
