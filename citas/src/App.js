import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  // Citas en LocalStorage
  const citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if(!citasIniciales){
    citasIniciales= [];
  }




  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);


  // useEffect realiza operaciones cuando el state cambia
    useEffect(() => {
      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas));
      }else{
        localStorage.setItem('citas', JSON.stringify([]));  
      }

    }, [citas] );


  // Funcion que tome las citas y agregue la nueva
  const crearCita = (cita) =>{
    guardarCitas([
      ...citas,
      cita

    ] );
  }

  // Funcion que elimina la cita por su id
  const eliminarCita = (id) =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  
  }


  // Mensaje Condicional
  const titulo = citas.length === 0 ? "No hay Citas" : "Administra tus citas"

  let idCitas = citas.length +1

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
          <div className="row">
              <div className="one-half column"> 
                  <Formulario
                    crearCita={crearCita}
                    idCitas = {idCitas}
                    
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
