import React from "react";
import { GlobalFondoSkills } from "./styled";
import { Info } from "../Info";
import { Sobre } from "../Sobre";
import { Skill } from "../Skill";

export const FondoSkill = () => {
  return (
    <>
      <GlobalFondoSkills>
        <Sobre />
        <Info />
        <Skill />
      </GlobalFondoSkills>
    </>
  );
};
