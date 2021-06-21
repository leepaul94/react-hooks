import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';




export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {

    //     setCounter( counter + 1 );

    // }

    // El callback hook tiene dos usos principales:
    // 1) Es para cuando queremos mandar una funcion a un componente hijo y si no lo mandamos con el useCallback siempre va a estar generando la componente poque va a estar generando una nueva version cada renderizado del componente padre.
    // 2) Es para cuando se usa un useEffect. Si la dependencia del effect es una funcion, tambien es recomendado usar el useCallback.
    // No me va a volver a renderizar la componente hijo ShowIncrement a menos que cambie el argumento que recibe increment en el componente hijo


    const increment = useCallback( (num) => {

        setCounter( c => c + num ); // el counter lo cambio por c porque sino lo tengo que poner como dependencia y eso va a hacer que se ejecute nuevamente cada vez que cambie el counter.
    
    }, [ setCounter ]);

    useEffect( () => {
        // ??? 
    }, [ increment ] );

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
