import React from "react";
import { Row, Col } from "antd";
import { Sobre } from "./Sobre";
import { Skill } from "./Skill";
import { Info } from "./Info";

export const Habilidades = () => {
  return (
    <>
      <Row
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e6e6e6",
        }}>
        <Col span={1}>
          <Sobre />
        </Col>
        <Col span={11} style={{}}>
          <Info />
        </Col>
        <Col span={11} style={{}}>
          <Skill />
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
};
