import React from "react";
import { Header } from "./components/Header";
import { Habilidades } from "./components/Habilidades";
import { Experience } from "./components/Experience";
import { Estudios } from "./components/Estudios";
import { Footer } from "./components/Footer";
import { Proyectos } from "./components/Proyectos";

export const App = () => {
  return (
    <>
      <Header />
      <Habilidades />
      <Proyectos />
      <Experience />
      <Estudios />
      <Footer />
    </>
  );
};
