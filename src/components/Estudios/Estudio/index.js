import React from "react";
import { EstudiosGloabl, GridEstudios } from "./styled";
import { ListEstudio } from "../ListEstudio";

export const Estudio = () => {
  return (
    <>
      <EstudiosGloabl>ESTUDIOS</EstudiosGloabl>
      <GridEstudios>
        <ListEstudio
          año="2020"
          titulo="Platzi Master | Colombia"
          subtitulo="Front-End Developer"
          descripcion="Programa personalizado de entrenamiento
intensivo con profesionales del rubro y asesorías
personalizadas."
        />
        <ListEstudio
          año="2005/2007"
          titulo="Escuela Técnica Antártida | Argentina"
          subtitulo="Bachiller Maestro Mayor de Obras"
          descripcion="Especialización de 3 años con la capacidad de
diseñar y calcular la construcción de casas
personalizadas hasta de 3 pisos.
"
        />
      </GridEstudios>
    </>
  );
};
