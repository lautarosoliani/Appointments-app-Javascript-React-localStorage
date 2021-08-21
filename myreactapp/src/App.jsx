import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //ARRAY DE CITAS. Aca van las citas nuevas, comineza vacio y se van agregando

  //CONTINUAR ACA EN 59

  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect para realizar operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  //Funcion que tome las citas actuales y agrague la nueva cita
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Funcion que elimina citas por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo =
    citas.length === 0 ? "No appointments yet!" : "Manage your appointments";

  return (
    <Fragment>
      <h1>Veterinary appointment</h1>
      {/* FRAMEWORK --> SKELETON --> tanto 'container' 'row' como 'one half column' pertenecen a Skeleton */}
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
