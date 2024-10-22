import './App.css'
import { useState } from 'react'



function App() {
 const [name, setName] = useState('Sofia'); // Inicializamos la primera variable de estado con el nombre con Sofia
 const [newName, setNewName] = useState (''); // La segunda variable de estado inicia con (''), sera el nuevo nombre. En este primer ejercicio no hace falta.

 return (
    <div>
        <h2>Teacher Name: {name}</h2> {/*Este es el valor de name, inicialmente Sofia*/}
        <ul>
            <li onClick = {() => setName('Data')}>Data</li> {/*Con onClick, al pulsar el nombre de cada profesor, cambia el nombre del h2*/}
            <li onClick = {() => setName('Reyes')}>Reyes</li>
            <li onClick = {() => setName('Yolanda')}>Yolanda</li>
        </ul>
           
    </div>
 )
};


export default App
