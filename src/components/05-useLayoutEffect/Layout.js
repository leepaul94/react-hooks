import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    
    const { counter, increment } = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    // console.log( state );
    const{ quote } = !!data && data[0]; //Estoy diciendo si hay info en la data, entonces vaya al objeto dentro del arreglo en el index igual a 0

    const pTag = useRef(); // para mantener la referencia a este parrafo y asi obtener el objeto con las mediciones.

    const [boxSize, setBoxSize] = useState({});
    
    // El useLayoutEffect es similar a useEffect pero se dispara de forma sincronica despues de todas las manipulaciones del DOM se hayan hecho. Se utiliza para tomar referencias o para saber que tamanio tiene alguna caja de texto, que tanio tiene algun div, etc. Se aconseja usar useEffect como estandar.
    // El objetivo del LayoutEffect es que despues de que se renderiza algo, se puede obtener mediciones de como quedaron div o diferentes componentes o sea tamanios o si ejecutar codigo despues de que se renderiza todo HTML.
    // Lo que se quiere es ver en pantalla el tamanio de la caja.
    // Nos sirve para sacar mediciones despues de que algo cambie como en este caso los quotes.

    useLayoutEffect( () => {

        setBoxSize( pTag.current.getBoundingClientRect() ); // le mando las mediciones al objeto boxSize cada vez que cambia de quote

    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

 
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                > 
                    { quote } 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize , null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
