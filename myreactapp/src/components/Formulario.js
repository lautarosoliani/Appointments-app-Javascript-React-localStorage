import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

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
        crearCita(cita);

        //REINICIAR EL FORM
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })



    }




    return (
        <Fragment>
            <h2>Make an appointment</h2>

            {error ? <p className="alerta-error">All fields are required</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Your pet's name"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Owner Name</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Your name"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Date</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Time</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Make an appointment</button>

            </form>
        </Fragment>

    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;