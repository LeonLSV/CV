import React from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Experiencia1 } from "./Experiencia1";
import { Trabajo } from "./Trabajo";
import { ContenedorSider, ContenedorCol } from "../../components/Study/styled";

const { Sider } = Layout;

export const Experiencia = () => {
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
            <Experiencia1 />
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
                <Trabajo
                  año="2018/2020"
                  titulo="Shows en Vivo | Argentina, Guatemala, Colombia"
                  subtitulo="Ingeniero de Sonido"
                  descripcion="Ingeniero de Sonido con artistas como: Manuel Turizo (Col), Dios Salve a la Reina (Arg), Benjamin Amadeo (Arg), Gaby Moreno (Gt)."
                />
              </ContenedorCol>
            </Col>
            <Col lg={23} xs={24}>
              <ContenedorCol>
                <Trabajo
                  año="2015/2020"
                  titulo="Fundador y Mentor | León Sonido Virtual"
                  subtitulo="Escuela Online"
                  descripcion="Educador con una población aproximada de 1000 estudiantes a lo largo de la existencia y generador de contenido de alto valor con alcance a todos los países de habla hispana. Mejorando la educación online y creando comunidades"
                />
              </ContenedorCol>
            </Col>
            <Col lg={23} xs={24}>
              <ContenedorCol>
                <Trabajo
                  año="2018"
                  titulo="Blessure | Guatemala"
                  subtitulo="Director del Departamento de Audio"
                  descripcion="Lider del área de Audio dirigiendo la organización y
logística de los eventos y capacitando al personal a
cargo."
                />
              </ContenedorCol>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </>
  );
};
