import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'

const Formulario = () => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',

    });

    const [error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //EXTRAER LOS VALORES
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //CUANDO EL USUARIO PRESIONA AGREGAR CITA
    const submitCita = e => {
        e.preventDefault();

        //VALIDAR, si el input esta vacio no permite avanzar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || fecha.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        //ELIMINAR EL MENSAJE PREVIO
        actualizarError(false);

        //ASIGNAR UN ID
        cita.id = uuid();
        console.log(cita);

        //CREAR LA CITA
        //REINICIAR EL FORM



    }




    return (
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>
        </Fragment>

    );
}

export default Formulario;