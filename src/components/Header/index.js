import React from "react";
import { Title } from "../Title";
import { Bienvenido } from "../Bienvenido";
import { GlobalHeader } from "./styled";

export const Header = () => {
  return (
    <>
      <GlobalHeader>
        <Bienvenido />
        <Title />
      </GlobalHeader>
    </>
  );
};
