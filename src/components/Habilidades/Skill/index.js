import React from "react";
import { GlobalLi, TextUl, LineaVerde } from "./styled";

export const Skill = () => {
  return (
    <>
      <GlobalLi>
        <TextUl colstart={1} colend={2} rowstart={1} rowend={2}>
          REACT.JS
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={1} rowend={2}>
          STYLED <br />
          COMPONENTS
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={1} rowend={2}>
          GITHUB
        </TextUl>
        <LineaVerde colstart1={1} colend1={4} rowstart1={2} rowend1={3} />
        <TextUl colstart={1} colend={2} rowstart={3} rowend={4}>
          HTML
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={3} rowend={4}>
          CSS
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={3} rowend={4}>
          JAVASCRIPT
        </TextUl>
        <LineaVerde colstart1={1} colend1={4} rowstart1={4} rowend1={5} />
        <TextUl colstart={1} colend={2} rowstart={5} rowend={6}>
          SASS
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={5} rowend={6}>
          NODE.JS
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={5} rowend={6}>
          WORDPRESS
        </TextUl>
        <LineaVerde colstart1={1} colend1={4} rowstart1={6} rowend1={7} />
        <TextUl colstart={1} colend={2} rowstart={7} rowend={8}>
          NEXT.JS
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={7} rowend={8}>
          TAILWIND
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={7} rowend={8}>
          BOOTSTRAP
        </TextUl>
        <LineaVerde colstart1={1} colend1={4} rowstart1={8} rowend1={9} />
        <TextUl colstart={1} colend={2} rowstart={9} rowend={10}>
          GRAPHQL
        </TextUl>
        <TextUl colstart={2} colend={3} rowstart={9} rowend={10}>
          SEO
        </TextUl>
        <TextUl colstart={3} colend={4} rowstart={9} rowend={10}>
          SCRUM
        </TextUl>
      </GlobalLi>
    </>
  );
};
