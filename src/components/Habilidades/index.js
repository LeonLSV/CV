import React from "react";
import { Row, Col } from "antd";
import { Sobre } from "./Sobre";
import { Skill } from "./Skill";
import { Info } from "./Info";

export const Habilidades = () => {
  return (
    <>
      <Row
        gutter={[1, 1]}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e6e6e6",
        }}>
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
      </Row>
    </>
  );
};
