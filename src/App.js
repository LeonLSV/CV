import React from "react";
import { Header } from "./components/Header";
import { Habilidades } from "./components/Habilidades";
import { Experiencia } from "./components/Experiencia";
import { Study } from "./components/Study";
import { Footer } from "./components/Footer";
import { Proyectos } from "./components/Proyectos";

export const App = () => {
  return (
    <>
      <Header />
      <Habilidades />
      <Proyectos />
      <Experiencia />
      <Study />
      <Footer />
    </>
  );
};
