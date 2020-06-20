import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {

  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Funcion que tome las citas y agregue la nueva
  const crearCita = (cita) =>{
    guardarCitas([
      ...citas,
      cita

    ]);
  }



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

              

              </div>
          </div>
      </div>

      </Fragment>
  );
}

export default App;
