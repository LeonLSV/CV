import React from "react";
import { GlobalLi, Ul1, LineUl, TextUl } from "./styled";

export const Skill = () => {
  return (
    <>
      <GlobalLi>
        <TextUl colstart={1} colend={2} rowstart={1} rowend={2}>
          HTML
        </TextUl>
        <TextUl>CSS</TextUl>
        <TextUl>JAVASCRIT</TextUl>

        <TextUl>REACT.JS</TextUl>
        <TextUl>
          STYLED <br />
          COMPONENTS
        </TextUl>
        <TextUl>NODE.JS</TextUl>

        <TextUl>SASS</TextUl>
        <TextUl>TAILWIND</TextUl>
        <TextUl>WORDPRESS</TextUl>
      </GlobalLi>
    </>
  );
};
