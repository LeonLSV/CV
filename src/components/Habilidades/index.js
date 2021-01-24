import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { Sobre } from "./Sobre";
import { Skill } from "./Skill";
import { Info } from "./Info";
import "./index.css";

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
      <Row
        className="rowhabilidades"
        gutter={[1, 1]}
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#e6e6e6",
        }}>
        <Col lg={1} xs={0} ref={element}>
          <Sobre />
        </Col>
        {show && (
          <>
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
    </>
  );
};
