import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Experiencia1 } from "./Experiencia1";
import { Trabajo } from "./Trabajo";
import { ContenedorSider, ContenedorCol } from "../../components/Study/styled";

const { Sider } = Layout;

export const Experiencia = () => {
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
            <Experiencia1 />
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
                    <Trabajo
                      año="2015/2020"
                      linktitle="https://www.leonsonidovirtual.com"
                      titulo="Front-End Developer | León Sonido Virtual"
                      subtitulo="Escuela Online"
                      descripcion="Desarrollador del Front-End para la eficaz navegación de los estudiantes en la plataforma. También soy educador y mentor en la misma institución."
                    />
                  </ContenedorCol>
                </Col>
                <Col lg={23} xs={24}>
                  <ContenedorCol>
                    <Trabajo
                      año="2018/2020"
                      linktitle="https://www.instagram.com/manuelturizo"
                      titulo="Shows en Vivo | Argentina, Guatemala, Colombia"
                      subtitulo="Ingeniero de Sonido"
                      descripcion="Ingeniero de Sonido con artistas como: Manuel Turizo (Col), Dios Salve a la Reina (Arg), Benjamin Amadeo (Arg), Gaby Moreno (Gt)."
                    />
                  </ContenedorCol>
                </Col>
                <Col lg={23} xs={24}>
                  <ContenedorCol>
                    <Trabajo
                      año="2018"
                      linktitle="https://www.blessureguatemala.com/"
                      titulo="Blessure | Guatemala"
                      subtitulo="Director del Departamento de Audio"
                      descripcion="Lider del área de Audio dirigiendo la organización y
logística de los eventos y capacitando al personal a
cargo."
                    />
                  </ContenedorCol>
                </Col>
              </>
            )}
          </Row>
        </Layout>
      </Layout>
    </>
  );
};

// Educador con una población aproximada de 1000 estudiantes a lo largo de la existencia y generador de contenido de alto valor con alcance a todos los países de habla hispana. Mejorando la educación online y creando comunidades."
