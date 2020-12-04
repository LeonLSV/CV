import React from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Estudio } from "./Estudio";
import { ListEstudio } from "./ListEstudio";

const { Sider } = Layout;

export const Study = () => {
  return (
    <>
      <Layout
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          background: "#e6e6e6",
        }}>
        <Sider
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100px",
            background: "#e6e6e6",
          }}>
          <Estudio />
        </Sider>
        <Layout>
          <Row
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#e6e6e6",
            }}>
            <Col lg={23} xs={24}>
              <ListEstudio
                año="2018/2020"
                titulo="Shows en Vivo | Argentina, Guatemala, Colombia"
                subtitulo="Ingeniero de Sonido"
                descripcion="Ingeniero de Sonido con artistas como: Manuel Turizo (Col), Dios Salve a la Reina (Arg), Benjamin Amadeo (Arg), Gaby Moreno (Gt)."
              />
            </Col>
            <Col lg={23} xs={24}>
              <ListEstudio
                año="2018"
                titulo="Blessure | Guatemala"
                subtitulo="Director del Departamento de Audio"
                descripcion="Lider del área de Audio dirigiendo la organización y
logística de los eventos y capacitando al personal a
cargo."
              />
            </Col>
          </Row>
        </Layout>
      </Layout>
    </>
  );
};
