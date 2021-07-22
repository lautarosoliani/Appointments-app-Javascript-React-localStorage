import React from 'react';
import PropTypes from 'prop-types';



const Cita = ({ cita, eliminarCita }) => (
    <div className="cita">
        <p>Pet: <span>{cita.mascota}</span></p>
        <p>Owner: <span>{cita.propietario}</span></p>
        <p>Appointment date: <span>{cita.fecha}</span></p>
        <p>Time: <span>{cita.hora}</span></p>
        <p>Sympton: <span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
        >Cancel appointment &times;</button>

    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;