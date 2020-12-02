import React from "react";
import { FondoFooter, FondoFooter2, TextFooter } from "./styled";
import { InfoFooter } from "../Info";

export const CardInfo = () => {
  return (
    <div>
      <FondoFooter />
      <InfoFooter />
      <FondoFooter2 />
      <TextFooter>Hecho con React y Styled Components | 2020</TextFooter>
    </div>
  );
};
