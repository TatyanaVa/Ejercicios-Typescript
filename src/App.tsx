import React from 'react';
import { Ejercicio1 } from './ejercicios/Ejercicio1';
import { Ejercicio2 } from './ejercicios/Ejercicio2';
import { Ejercicio3 } from './ejercicios/Ejercicio3';
import Ejercicio4 from './ejercicios/Ejercicio4';
import { Ejercicio5 } from './ejercicios/Ejercicio5';
import { Ejercicio6 } from './ejercicios/Ejercicio6';
import { Ejercicio7 } from './ejercicios/Ejercicio7';

const App=()=>{
  return(
    <div className="mt-2">
        <h3>Ejercios Typescript</h3>
        <hr />
       {/* {<Ejercicio1/>} */}
       {/* {<Ejercicio2/>} */}
       {/* {<Ejercicio3/>} */}
       {/* {<Ejercicio4/>} */}
       {/* {<Ejercicio5/>} */}
      {/* {<Ejercicio6/>} */}
      {<Ejercicio7/>}

        </div>
  )
}

export default App;
