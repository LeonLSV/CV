import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { GlobalProyectos } from "./styled";
import { Proyecto } from "./Proyecto";
import { Card } from "./Cards";
import { Carousel } from "antd";
import lsv from "../../images/lsv.png";
import cuestionario from "../../images/cuestionario.png";
import podcast from "../../images/podcast.png";
import estereofund from "../../images/estereofund.png";
import lsvtools from "../../images/lsvtools.png";
import efectohaas from "../../images/efectohaas.png";

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

  return (
    <>
      <GlobalProyectos>
        <Row
          ref={element}
          style={{
            // height: "100vh",
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
                    <div style={contentStyle}>
                      <Card
                        titulo="León Sonido Virtual"
                        descripcion="Escuela de audio en vivo. Hecha con WordPress."
                        hrefImg="https://leonsonidovirtual.com/"
                        image={lsv}
                        href="https://leonsonidovirtual.com/"
                      />
                    </div>
                  </div>
                  <div>
                    <div style={contentStyle}>
                      <Card
                        titulo="Cuestionario JS"
                        descripcion="Cuestionario del curso de Ajuste de Sistemas de sonido."
                        hrefImg="https://leonlsv.github.io/Cuestionario/"
                        image={cuestionario}
                        href="https://github.com/LeonLSV/Cuestionario"
                      />
                    </div>
                  </div>
                  <div>
                    <div style={contentStyle}>
                      <Card
                        titulo="LSV Tools - App de escritorio"
                        descripcion="Aplicación creada y programada por mi."
                        hrefImg="https://leonsonidovirtual.com/lsv-tools/"
                        image={lsvtools}
                        href="https://www.youtube.com/watch?v=EVtRBdwfDuY&t=262s"
                      />
                    </div>
                  </div>
                </Carousel>
              </Col>
              <Col lg={11} xs={0} style={{ marginTop: "-150px" }}>
                <Carousel autoplay effect="fade">
                  <div>
                    <div style={contentStyle}>
                      <Card
                        titulo="App Efecto Haas"
                        descripcion="Aplicación creada y programada por mi (React)."
                        hrefImg="https://lsv-efecto-haas.vercel.app/ "
                        image={efectohaas}
                        href="https://github.com/LeonLSV/EfectoHaas"
                      />
                    </div>
                  </div>

                  <div>
                    <div style={contentStyle}>
                      <Card
                        titulo="Stereo Fund"
                        descripcion="Página web creada en WordPress."
                        hrefImg="https://stereofund.com.mx/"
                        image={estereofund}
                        href="https://stereofund.com.mx/"
                      />
                    </div>
                  </div>

                  <div>
                    <div style={contentStyle}>
                      <Card
                        titulo="Podcasts"
                        descripcion="Consumo de API de Podcasts."
                        hrefImg="https://next-js-pi-opal.vercel.app/"
                        image={podcast}
                        href="https://github.com/LeonLSV/NextJs"
                      />
                    </div>
                  </div>
                </Carousel>
              </Col>
              <Col lg={1} xs={0}></Col>
            </>
          )}
        </Row>
      </GlobalProyectos>
    </>
  );
};
