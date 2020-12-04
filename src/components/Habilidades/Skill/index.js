import React from "react";
import { GlobalLi, TextUl, LineaVerde } from "./styled";

export const Skill = () => {
  return (
    <>
      <GlobalLi>
        <TextUl colstart={1} colend={2} rowstart={1} rowend={2}>
          HTML
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={1} rowend={2}>
          CSS
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={1} rowend={2}>
          JAVASCRIPT
        </TextUl>
        <LineaVerde colstart1={1} colend1={4} rowstart1={2} rowend1={3} />
        <TextUl colstart={1} colend={2} rowstart={3} rowend={4}>
          REACT.JS
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={3} rowend={4}>
          STYLED <br />
          COMPONENTS
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={3} rowend={4}>
          NODE.JS
        </TextUl>
        <LineaVerde colstart1={1} colend1={4} rowstart1={4} rowend1={5} />
        <TextUl colstart={1} colend={2} rowstart={5} rowend={6}>
          SASS
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={5} rowend={6}>
          TAILWIND
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={5} rowend={6}>
          WORDPRESS
        </TextUl>
      </GlobalLi>
    </>
  );
};