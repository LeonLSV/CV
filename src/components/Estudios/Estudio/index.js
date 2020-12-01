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
          descripcion="Programa personalizado de entrenamiento intensivo con profesionales del rubro y asesorías personales"
        />
        <ListEstudio
          año="2007"
          titulo="Escuela Técnica Antártida | Argentina"
          subtitulo="Bachiller Maestro Mayor de Obras"
          descripcion="Carrera de 3 años donde me recibí con la capacidad de diseñar y calcular la construcción de casas hasta 3 pisos"
        />
      </GridEstudios>
    </>
  );
};
