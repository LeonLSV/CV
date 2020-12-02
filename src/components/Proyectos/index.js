import React from "react";
import { Row, Col } from "antd";
import { Proyecto } from "./Proyecto";
import { Card } from "./Cards";
import { Carousel } from "antd";
import proyecto1 from "../../images/always.jpeg";

const contentStyle = {
  color: "#fff",
  // lineHeight: "20px",
  textAlign: "center",
  background: "transparent",
  height: "520px",
};

export const Proyectos = () => {
  return (
    <>
      <Row
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
        }}>
        <Col span={1}>
          <Proyecto />
        </Col>
        <Col span={11} style={{ marginTop: "-200px" }}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Always Update"
                  descripcion="Diario Digital con Scraping"
                  image={proyecto1}
                  href="https://github.com/LeonLSV/DiarioDigital"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Cuestionario JS"
                  descripcion="Cuestionario de un curso online"
                  image={proyecto1}
                  href="https://github.com/LeonLSV/DiarioDigital"
                />
              </div>
            </div>
          </Carousel>
        </Col>
        <Col span={11} style={{ marginTop: "-200px" }}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Petgram"
                  descripcion="La red social de los animales"
                  image={proyecto1}
                  href="https://github.com/LeonLSV/DiarioDigital"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Card
                  titulo="Podcasts"
                  descripcion="Aplicación Web para escuchar podcasts"
                  image={proyecto1}
                  href="https://github.com/LeonLSV/DiarioDigital"
                />
              </div>
            </div>
          </Carousel>
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
};
