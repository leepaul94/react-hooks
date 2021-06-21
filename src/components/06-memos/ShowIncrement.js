import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => { // Se necesita ademas del useCallback, el React.memo para que me memorice el componente o la funcion a menos que haya un cambio en el argumento que recibe, es decir, si cambiam sus propiedades.

    console.log(' Me volvi a llamar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
