import React from 'react'
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia';
import Membro from './componentes/Membro'

const elemento = document.getElementById("root");
ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira" >
            <Membro nome="Andre"/>
            <Membro nome="Mariana"/>
        </Familia>
        <FamiliaSilva/>
        {/* <MultiElementos /> */}
        {/* <CompA valor="Olá eu sou o A!" />
        <B valor="B na área!" /> */}
        {/* <PrimeiroComponente valor="Bom dia!" idade={25} /> */}
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