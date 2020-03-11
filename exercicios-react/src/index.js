import React from 'react'
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'

const elemento = document.getElementById("root");
ReactDOM.render(
    <div>
        {/* <MultiElementos /> */}
        {/* <CompA valor="Olá eu sou o A!" />
        <B valor="B na área!" /> */}
        {/* <PrimeiroComponente valor="Bom dia!" idade={25} /> */}
        <FamiliaSilva />
    </div>
, elemento)


// const jsx = <h1>Olá React!</h1>
// ReactDOM.render(jsx, elemento)
// ReactDOM.render(
//     <ul>
//         <li>1) Predro</li>
//         <li>2) Maria</li>
//         <li>3) ana</li>
//     </ul>    
// , elemento)