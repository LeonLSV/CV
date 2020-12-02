import React from "react";
import { Fondo } from "./components/Fondo";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Experience } from "./components/Experience";
import { Estudios } from "./components/Estudios";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Fondo />
      <Header />
      <Skills />
      <Project />
      <Experience />
      <Estudios />
      <Footer />
    </>
  );
};
