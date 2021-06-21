import React from 'react';

// Para prevenir que se renderice de nuevo si sus propiedades son las mismas, usamos la funcion memo de React. 
// Es una funcion que va a revisar la forma memorizada de mi componente y solo se va a ejecutar si las properties cambian.
// El memo es para memorizar algo y solo va a renderizar o dispararse de nuevo o ejecutarse de nuevo si sus propiedades cambian.
// Caso contrario, usa la version memorizada cuando tenga que redibujar algo.


export const Small = React.memo(({ value }) => {

    console.log(' Me volvi a llamar :( ');
    // http?

    return (
        <small> { value } </small>
    )
});
