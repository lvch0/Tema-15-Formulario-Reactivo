import React from "react";
import { Datos } from "./components/Datos";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="container mt=5">
        <Header/>
      </div>

      <div className="container mt=5">
        <Formulario />
      </div>


    </>
  );
}

export default App;
