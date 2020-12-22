import React from "react";
import {
  GlobalTitle,
  Parrafo,
  TitleHeader,
  Title2Header,
  Line,
} from "./styled";

export const Title = () => {
  return (
    <>
      <GlobalTitle>
        <TitleHeader>Front-End</TitleHeader>
        <Title2Header>Developer.</Title2Header>
        <Parrafo>
          Front-End Developer{" "}
          <span style={{ color: "#73af5c" }}>
            enfocado en el desarrollo de aplicaciones web con React.
          </span>{" "}
          Pro-activo, con espíritu de liderazgo y versátil en la adaptación de
          nuevos entornos y retos.
        </Parrafo>
        <Line></Line>
      </GlobalTitle>
    </>
  );
};
