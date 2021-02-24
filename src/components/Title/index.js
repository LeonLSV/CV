import React, { useEffect } from "react";
import {
  GlobalTitle,
  Parrafo,
  TitleHeader,
  Title2Header,
  Line,
} from "./styled";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Title = () => {
  let tl = new TimelineLite({ delay: 0.3 });
  let tl2 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    tl.staggerFrom(
      ".animacion1",
      1,
      { y: 30, opacity: 0, ease: Power3.easeOut },
      0.15,
      "Start"
    );
    tl2.staggerFrom(
      ".animacion2",
      2,
      { opacity: 0, ease: Power3.easeOut },
      0.15,
      "Start"
    );
  });

  return (
    <>
      <GlobalTitle>
        <div className="animacion1">
          <TitleHeader>Front-End</TitleHeader>
        </div>
        <div className="animacion1">
          <Title2Header>Developer.</Title2Header>
        </div>
        <div className="animacion2">
          <Parrafo>
            Front-End Developer{" "}
            <span style={{ color: "#73af5c" }}>
              enfocado en el desarrollo de aplicaciones web con React.
            </span>{" "}
            Pro-activo y dinámico, con capacidad de rápido aprendizaje, creativo
            y versátil en la adaptación de nuevos entornos y retos.
          </Parrafo>
        </div>
        <Line></Line>
      </GlobalTitle>
    </>
  );
};
