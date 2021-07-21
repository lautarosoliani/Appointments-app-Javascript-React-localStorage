import React, { Fragment } from 'react';
import Formulario from './components/Formulario';

//FRAMEWORK --> SKELETON
//Second Commit corresponde al video 53 de Udemy

function App() {
  return (
    <Fragment>
      <h1>Turno Veterinario</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            <Formulario />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
