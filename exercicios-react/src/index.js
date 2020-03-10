import React from 'react'
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById("root");
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom dia!" idade={25} />
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