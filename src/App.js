import React from "react";
import { Fondo } from "./components/Fondo";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Experience } from "./components/Experience";

export const App = () => {
  return (
    <>
      <Fondo />
      <Header />
      <Skills />
      <Project />
      <Experience />
    </>
  );
};
