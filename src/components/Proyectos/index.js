import React from "react";
import { Row, Col } from "antd";
import { Proyecto } from "./Proyecto";
import { Card } from "./Cards";
import { Carousel } from "antd";
import proyecto1 from "../../images/always.png";
import cuestionario from "../../images/cuestionario.png";
import podcast from "../../images/podcast.png";
import petgram from "../../images/petgram.png";

const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "transparent",
  height: "700px",
};

export const Proyectos = () => {
  return (
    <>
      <Row
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
        }}>
        <Col lg={1} xs={0}>
          <Proyecto />
        </Col>
        <Col lg={11} xs={24} style={{ marginTop: "-150px" }}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Always Update"
                  descripcion="Diario Digital con Scraping de noticias"
                  image={proyecto1}
                  href="https://github.com/LeonLSV/DiarioDigital"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Cuestionario JS"
                  descripcion="Cuestionario del curso de Ajuste de Sistemas de sonido"
                  image={cuestionario}
                  href="https://github.com/LeonLSV/Cuestionario"
                />
              </div>
            </div>
          </Carousel>
        </Col>
        <Col lg={11} xs={0} style={{ marginTop: "-150px" }}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Petgram"
                  descripcion="La red social de los animales"
                  image={petgram}
                  href="https://github.com/LeonLSV/ReactAvanzado"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Podcasts"
                  descripcion="Aplicación Web para escuchar podcasts"
                  image={podcast}
                  href="https://github.com/LeonLSV/NextJs"
                />
              </div>
            </div>
          </Carousel>
        </Col>
        <Col lg={1} xs={0}></Col>
      </Row>
    </>
  );
};
