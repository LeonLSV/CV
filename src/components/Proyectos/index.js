import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { GlobalProyectos } from "./styled";
import { Proyecto } from "./Proyecto";
import { Card } from "./Cards";
import { Carousel, Tooltip } from "antd";
import lsv from "../../images/lsv.png";
import cuestionario from "../../images/cuestionario.png";
import podcast from "../../images/podcast.png";
import estereofund from "../../images/estereofund.png";
import lsvtools from "../../images/lsvtools.png";
import efectohaas from "../../images/efectohaas.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "transparent",
  height: "700px",
};

export const Proyectos = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          // console.log("Si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
      // console.log(element.current);
    },
    [element]
  );

  useEffect(() => {
    gsap.from(".intro", {
      duration: 3,
      y: "-150",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "top 50%",
        scrub: "true",
        markers: "true",
      },
    });
    gsap.to(".intro", {
      duration: 3,
      y: "0",
      opacity: 1,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "top 50%",
        scrub: "true",
        markers: "true",
      },
    });
  });

  return (
    <>
      <GlobalProyectos>
        <div className="intro">
          <Row
            ref={element}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "black",
            }}>
            {show && (
              <>
                <Col lg={1} xs={0}>
                  <Proyecto />
                </Col>
                <Col lg={11} xs={24} style={{ marginTop: "-150px" }}>
                  <Carousel autoplay effect="fade">
                    <div>
                      <Tooltip
                        placement="top"
                        title="Esta es mi página web oficial. Desde 2015 estoy implementando WordPress. Me encargo tanto del Frontend como del Backend.">
                        <div style={contentStyle}>
                          <Card
                            titulo="León Sonido Virtual"
                            descripcion="Escuela de audio en vivo. Hecha con WordPress."
                            hrefImg="https://leonsonidovirtual.com/"
                            image={lsv}
                            href="https://leonsonidovirtual.com/"
                          />
                        </div>
                      </Tooltip>
                    </div>
                    <div>
                      <Tooltip
                        placement="top"
                        title="Esta aplicación es propia y la cree en 2018 en JAVA. Fue el puntapie para decidir perfeccionar mis habilidades de programador.">
                        <div style={contentStyle}>
                          <Card
                            titulo="LSV Tools - App de escritorio"
                            descripcion="Aplicación creada y programada por mi."
                            hrefImg="https://leonsonidovirtual.com/lsv-tools/"
                            image={lsvtools}
                            href="https://www.youtube.com/watch?v=EVtRBdwfDuY&t=262s"
                          />
                        </div>
                      </Tooltip>
                    </div>
                    <div>
                      <Tooltip
                        placement="top"
                        title="Este cuestionario esta hecho en JavaScript puro. Aprendí como usar las funciones para interactuar con el usuario.">
                        <div style={contentStyle}>
                          <Card
                            titulo="Cuestionario JS"
                            descripcion="Cuestionario del curso de Ajuste de Sistemas de sonido."
                            hrefImg="https://leonlsv.github.io/Cuestionario/"
                            image={cuestionario}
                            href="https://github.com/LeonLSV/Cuestionario"
                          />
                        </div>
                      </Tooltip>
                    </div>
                  </Carousel>
                </Col>
                <Col lg={11} xs={0} style={{ marginTop: "-150px" }}>
                  <Carousel autoplay effect="fade">
                    <div>
                      <Tooltip
                        placement="top"
                        title="Esta APP es propia. La cree en 2018 en JAVA y recientemente la pase a React como PWA. Aprendí el uso del Hook useRef y dibujar en base a la información de los inputs.">
                        <div style={contentStyle}>
                          <Card
                            titulo="App Efecto Haas"
                            descripcion="Aplicación creada y programada por mi (React)."
                            hrefImg="https://lsv-efecto-haas.vercel.app/ "
                            image={efectohaas}
                            href="https://github.com/LeonLSV/EfectoHaas"
                          />
                        </div>
                      </Tooltip>
                    </div>

                    <div>
                      <Tooltip
                        placement="top"
                        title="Este es uno de los varios trabajos que hice de forma independiente para terceros. Está hecha con WordPress.">
                        <div style={contentStyle}>
                          <Card
                            titulo="Stereo Fund"
                            descripcion="Página web creada en WordPress."
                            hrefImg="https://stereofund.com.mx/"
                            image={estereofund}
                            href="https://stereofund.com.mx/"
                          />
                        </div>
                      </Tooltip>
                    </div>

                    <div>
                      <Tooltip
                        placement="top"
                        title="Esta App es parte de un curso de Next.js donde aprendí a consumir una API.">
                        <div style={contentStyle}>
                          <Card
                            titulo="Podcasts"
                            descripcion="Consumo de API de Podcasts."
                            hrefImg="https://next-js-pi-opal.vercel.app/"
                            image={podcast}
                            href="https://github.com/LeonLSV/NextJs"
                          />
                        </div>
                      </Tooltip>
                    </div>
                  </Carousel>
                </Col>
                <Col lg={1} xs={0}></Col>
              </>
            )}
          </Row>
        </div>
      </GlobalProyectos>
    </>
  );
};
