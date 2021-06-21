import React, { useRef } from 'react';
import '../02-useEffect/effects.css';


export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => { // Con esta funcion quiero que me haga focus en el input
        // document.querySelector('input').select(); // esta es una manera de hacerlo. Puedo hacer querySelector porque tengo uno solo. Puedo elegir entre focus() o select(). La diferencia esta en que select() ademas de hacerme focus en la caja de llenado, me selecciona todo lo escrito en el. Es preferible hacerlo de esta manera y poniendo un id al tag input.
        inputRef.current.select(); // current es porque adentro de la variable ref que es un objeto, puedo ir a la prop current donde se guardara la referencia deseada.
        console.log(inputRef); // Me imprime el inputRef que va a mostrar que tengo la referencia a todo el tag input.
    } // no es un uso comun utilizar el ref de esta manera. 


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"

            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }    
            >
                Focus
            </button>

        </div>
    )
}
