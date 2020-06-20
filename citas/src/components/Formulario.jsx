import React, {Fragment, useState} from 'react'


const Formulario = ({crearCita, idCitas}) => {

    // Crear state de Citas
    const[cita, actualizarCita] = useState({
        mascota: "",
        propietario : "",
        fecha: "",
        hora: "",
        sintomas: ""
    });


    const[error, actualizarError] = useState(false)
    
    
    // Funcion que actualiza los campos  
    const actualizarState= (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;


    // Cuando el usuario presiona agregar cita
    const submitCita= (e) => {
        e.preventDefault();


        // Validar

        if(mascota.trim()==="" || propietario.trim() ==="" || fecha.trim()==="" || hora.trim()===""|| sintomas.trim() ===""){
            actualizarError(true);
            return;
        }
    

        // Asignar un ID

        
        cita.id = idCitas;

        // Crear la Cita

        crearCita(cita);

        // Reiniciar el Form

        actualizarCita({
            mascota: "",
            propietario : "",
            fecha: "",
            hora: "",
            sintomas: ""
        })


      

    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son Obligatorios</p> : null}

            <form
                onSubmit={submitCita}

            >


                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota***"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño***"
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
                >Agregar Cita</button>
                
            </form>


        </Fragment>


     );
}
 
export default Formulario;



