import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

//FRAMEWORK --> SKELETON
//Second Commit corresponde al video 53 de Udemy

function App() {

  //ARRAY DE CITAS
  const [citas, guardarCitas] = useState([]);

  //useEffect para realizar operaciones cuando el state cambia
  useEffect(() => {
    console.log('Listo')
  }, []);

  //Funcion que tome las citas actuales y agrague la nueva cita
  const crearCita = cita => {
    guardarCitas([...citas, cita])
  }

  //Funcion que elimina citas por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }


  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';



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
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
