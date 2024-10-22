import './App.css'
import { useState } from 'react'


/* BONUS */

function App() {
    const [name, setName] = useState('Sofia'); // Inicializamos la primera variable de estado con el nombre con Sofia
    const [newName, setNewName] = useState (''); // La segunda variable de estado inicia con (''), sera el nuevo nombre. En este primer ejercicio no hace falta.
    
    const changeName = (input) => {
        if(input !=='') { // Indicamos que el input no es igual a cadena vacia ''.
            setName(input) //Actualiza el estado name con newName.
            setNewName('') // Restablece el estado de newName a una cadena vacia.
        }
        
    }
    return (
            <div>
                <h2>Teacher name: {neme}</h2>
                <form>
                    <input type="text" value={newName} onChange={input} placeholder="add a name" />
                    <button type="submit">Add</button>
                </form>
            </div>
    )

   };




// PRIMERA PARTE

//function App() {
// const [name, setName] = useState('Sofia'); // Inicializamos la primera variable de estado con el nombre con Sofia
// const [newName, setNewName] = useState (''); // La segunda variable de estado inicia con (''), sera el nuevo nombre. En este primer ejercicio no hace falta.

// return (
//    <div>
//        <h2>Teacher Name: {name}</h2> {/*Este es el valor de name, inicialmente Sofia*/}
//        <ul>
//            <li onClick = {() => setName('Data')}>Data</li> {/*Con onClick, al pulsar el nombre de cada profesor, cambia el nombre del h2*/}
//            <li onClick = {() => setName('Reyes')}>Reyes</li>
//            <li onClick = {() => setName('Yolanda')}>Yolanda</li>
//        </ul>
           
//    </div>
// )
//};


export default App
