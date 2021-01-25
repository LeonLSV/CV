import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { Sobre } from "./Sobre";
import { Skill } from "./Skill";
import { Info } from "./Info";
import "./index.css";
import { GlobalSkills } from "./styled";

export const Habilidades = () => {
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
      <GlobalSkills>
        <Row
          ref={element}
          className="rowhabilidades"
          gutter={[1, 1]}
          style={{
            margin: "0",
            display: "flex",
            alignItems: "center",
            background: "#e6e6e6",
          }}>
          {show && (
            <>
              <Col lg={1} xs={0}>
                <Sobre />
              </Col>
              <Col lg={11} xs={24} style={{}}>
                <Info />
              </Col>
              <Col lg={11} xs={20} style={{}}>
                <Skill />
              </Col>
              <Col lg={1} xs={0}></Col>
            </>
          )}
        </Row>
      </GlobalSkills>
    </>
  );
};
