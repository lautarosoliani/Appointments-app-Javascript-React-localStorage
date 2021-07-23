import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';



const Formulario = ({ crearCita }) => {



    // Para crear el State que nos va a permitir ir leyendo los diferentes campos:
    // Importar el useState a la linea 1
    // Elegir donde crearlo, en este caso en Formulario.js pero en otros puede ser en App.js
    // Crear State de Citas que en este caso va a ser un objeto pero podria ser otra cosa (array con [], objeto con {}, o simplemente booleano queda nomas entre los parentesis)
    // En este caso, 'actualizarCita' me permite escribir/reescribir en el Objeto Cita cuando el usuario este escribiendo
    // Y esto es gracias al 'onChange' con la funcion que llame 'actualizarState' (LINEA 36)
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });



    const [error, actualizarError] = useState(false)



    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    //Para obtener lo que el usuario escribe reemplazo los '()' por la 'e' y obtengo el evento onChange
    //Luego va el '...cita' que es la copia del valor llamado 'cita'. Por que? Por que sino se sobreescribirian los datos
    //Para saber en que campo esta escribiendo se usa 'e.target.name' y devuelve el 'name'
    //Con 'e.target.value' devuelve lo que el usuario tipio
    //NO VALE -> cita.mascota = e.taget.value por que? porque el State en React siempre se modifica con su funcion -> [ A , estaEsLaFuncion ] = useState,
    //que en este caso particular es 'actualizarCita'.
    // Esto se usa asi -> "[e.target.name]: e.target.value" y devuelve el lugar donde se tipio y que se tipio 
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }



    //Extraer los valores para ahorrarme escribir luego lo siguiente -> mascota.cita , propietario.cita , fecha.cita , etc.
    //Agrega 'Value' a los elementos de los Input y los nombra igual que el 'name' de cada input,
    //en este caso son Value={mascota}, Value={propietario}, etc. Para mas adelante 'resetear' los formularios
    const { mascota, propietario, fecha, hora, sintomas } = cita;



    //Funcion -> cuando Click en Button
    // e.preventDefault() previene que envien el formulario vacio
    const submitCita = e => {
        e.preventDefault();



        //VALIDAR -> '.trim' sirve para obligar al usuario a no dejar nada vacio, entonces uso -> 'name.trim'
        //Para esto creo una nueva funcion llamada 'actualizarError' que inicia como 'false' porque logicamente no hay error en status quo inicial,
        //pero si el usuario deja algun campo vacio entonces -> actualizarError(true)
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

            {/* El siguiente Form contiene todo el 'Make an appointment' */}
            <form
                onSubmit={submitCita}
            //Creo la funcion submitCita para utilizar onChange del button, o sea, cuando el usuario le haga Click. 
            >
                {/* Por cada campo creo un 'label' que es el nombre de cada input (nombre mascota, nombre duenio, etc) y su input/campo correspondiente */}

                <label>Pet's Name</label>
                <input
                    type="text"
                    name="mascota"
                    // Util en la funcion de la LINEA 36 para usar el 'e.target.name'
                    className="u-full-width"
                    // CSS -> Skeleton
                    placeholder="Your pet's name"
                    onChange={actualizarState}
                    // onChange ocurre cuando el usuario tipea/similares,
                    // entonces ocurre la funcion entre llaves {actualizarState}  (LINEA 36)
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