import React from "react";
import { Title } from "../Title";
import { Bienvenido } from "../Bienvenido";
import { Fondo } from "../Fondo";
import { GlobalHeader } from "./styled";

export const Header = () => {
  return (
    <>
      <GlobalHeader>
        <Fondo />
        <Bienvenido />
        <Title />
      </GlobalHeader>
    </>
  );
};
