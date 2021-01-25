import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Estudio } from "./Estudio";
import { ListEstudio } from "./ListEstudio";
import { ContenedorSider, ContenedorCol, MarginFooter } from "./styled";

const { Sider } = Layout;

export const Study = () => {
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
            ref={element}
            style={{
              height: "auto",
              display: "flex",
              alignItems: "center",
              background: "#e6e6e6",
            }}>
            {show && (
              <>
                <Col lg={23} xs={24}>
                  <ContenedorCol>
                    <ListEstudio
                      año="2020/2021"
                      linktitle="https://platzi.com/blog/que-es-platzi-master/"
                      titulo="Platzi Master | Colombia"
                      subtitulo="Front-End Developer"
                      descripcion="Programa personalizado de entrenamiento
intensivo con profesionales del rubro y asesorías
personalizadas. Solo aceptan al top 0.1% de los mejores estudiantes cada mes."
                    />
                  </ContenedorCol>
                </Col>

                <Col lg={23} xs={24}>
                  <ContenedorCol>
                    <ListEstudio
                      año="2020/2021"
                      linktitle="https://platzi.com/p/ramirocontrerasleon/"
                      titulo="Cursos de Programación y SoftSkills"
                      subtitulo="Nuevas Tecnologías"
                      descripcion="Algunos de los cursos que tome: JavaScript, Responsive Design, Next JS, Node JS, CSS Grid, Preprocesadores CSS, Progressive Web Apps, Tailwind, Accesibilidad, Git y GitHub,  Sass, Gatsby JS, Comunicación efectiva, Trabajo en equipo, Soporte a Usuarios, entre otros. "
                    />
                  </ContenedorCol>
                </Col>
                <Col lg={23} xs={24} style={{ background: "#e6e6e6" }}>
                  <ContenedorCol>
                    <ListEstudio
                      año="2013/2020"
                      linktitle="https://meyersound.com/"
                      titulo="Cursos de Audio en Vivo"
                      subtitulo="Nuevas Tecnologías"
                      descripcion="He finalizado gran cantidad de capacitaciones y certificaciones oficiales tales como: Allen And Heath, Sennheiser, Meyer Sound, Digico, Shure, Smaart Live, entre otras. "
                    />
                  </ContenedorCol>
                </Col>
              </>
            )}
            {/* <Col lg={23} xs={24}>
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
            </Col> */}
          </Row>
          <Row>
            <MarginFooter />
          </Row>
        </Layout>
      </Layout>
    </>
  );
};
