import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey!');
    }, [] ); // se dispara cuando se ejecuta por primera vez

    useEffect( () => {
        // console.log('name cambio');
    }, [ name ] ); // se dispara cuando cambia name

    useEffect( () => {
        // console.log('email cambio');
    }, [ email ] ); // se dispara cuando cambia email

    // e es un evento al introducirse input y es un objeto con muchas propiedades

    const handleInputChange = ( { target } ) => { // target tambien es un objeto que apunta al input. Si lo imprimo en consola, aparece la etiqueta completa del input.
        
        setFormState({
            ...formState,
            [target.name]: target.value 
        });
    }
    
    return (
        <>
            <h1>useEffect</h1> 
            <hr />
                
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }

                />
            </div>


            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }

                />
            </div>

            { ( name === '123' ) && <Message /> }

        </>
    )
}
