import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

//FRAMEWORK --> SKELETON
//Second Commit corresponde al video 53 de Udemy

function App() {

  //ARRAY DE CITAS
  const [citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agrague la nueva cita
  const crearCita = cita => {
    guardarCitas([...citas, cita])
  }


  return (
    <Fragment>
      <h1>Turno Veterinario</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            {/* <Formulario /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
