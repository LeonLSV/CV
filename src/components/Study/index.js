import React from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Estudio } from "./Estudio";
import { ListEstudio } from "./ListEstudio";
import { ContenedorSider, ContenedorCol } from "./styled";

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
        <ContenedorSider>
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
        </ContenedorSider>
        <Layout>
          <Row
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              background: "#e6e6e6",
            }}>
            <Col lg={23} xs={24}>
              <ContenedorCol>
                <ListEstudio
                  año="2020"
                  titulo="Platzi Master | Colombia"
                  subtitulo="Front-End Developer"
                  descripcion="Programa personalizado de entrenamiento
intensivo con profesionales del rubro y asesorías
personalizadas."
                />
              </ContenedorCol>
            </Col>
            <Col lg={23} xs={24}>
              <ContenedorCol>
                <ListEstudio
                  año="2013-2020"
                  titulo="Cursos Varios"
                  subtitulo="Audio en vivo"
                  descripcion="He finalizado gran cantidad de capacitaciones y certificaciones oficiales tales como: Allen And Heath, Sennheiser, Meyer Sound, Digico, Shure, Smaart Live, entre otras... "
                />
              </ContenedorCol>
            </Col>
            <Col lg={23} xs={24}>
              <ContenedorCol>
                <ListEstudio
                  año="2007"
                  titulo="Escuela Técnica Antártida | Argentina"
                  subtitulo="Bachiller Maestro Mayor de Obra"
                  descripcion="Especialización de 3 años con la capacidad de
diseñar y calcular la construcción de casas
personalizadas hasta de 3 pisos."
                />
              </ContenedorCol>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </>
  );
};
