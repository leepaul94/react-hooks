import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    // Estoy usando el custom Hook useForm para descomprimir el componente. Obtengo el estado de mi description del todo, la funcion que me toma el input introducido y el reseteo de la caja de formulario.
    const [ { description }, handleInputChange, reset ] = useForm({
        description: '',
    })

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( description.trim().length <= 1) { // Para no poder ingresar un todo en blanco
            return;
        }

        const newTodo = { // Es el nuevo todo a agregar
            id: new Date().getTime(),
            desc: description,
            done: false 
        }

        handleAddTodo( newTodo ); // Para agregarlo se usa la funcion handleAddTodo 
        reset(); // Para que la caja de formulario se resetee luego de agregar un todo. 

    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>

                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
