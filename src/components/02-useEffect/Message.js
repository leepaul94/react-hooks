import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = (e) => { // para saber las coordenadas de mi puntero de mouse
            // console.log(e); // imprimo el objeto donde va a residir como prop las coordenadas del mouse
            const coords = { x: e.x, y: e.y}; // creo el objeto con los nuevos valores
            setCoords( coords )
        };

        window.addEventListener('mousemove', mouseMove); // le estoy pasando la referencia a la funcion en vez de hacer el callback adentro.

        return () => { // es una funcion de limpieza que se retorna cuando se desusa el useEffect, en este caso cuando deja de ser 123 el nombre que se introduce en el formulario de la pagina
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    
    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
