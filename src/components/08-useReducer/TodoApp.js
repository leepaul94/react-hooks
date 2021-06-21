import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []; //Se usa JSON.parse() porque tengo que pasar del string a objeto nuevamente y lo lee desde el localStorage, identificado como 'todos'. Como puede regresarme null si no estan los todos, pongo el || [] para que me regrese un arreglo vacio.
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false 
    // }];

}


export const TodoApp = () => {

    // El useReducer
    const [ todos, dispatch ] = useReducer(todoReducer, [], init); //

    // con este useEffect, cada vez que cambia el todos me lo guarda en el localStorage
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [ todos ]);

    const handleDelete = ( todoId ) => {

        // crear la action
        const action = {
            type: 'delete',
            payload: todoId
        };
        //dispatch
        dispatch( action );

    };

    const handleToggle = ( todoId ) => { // Tacha y destacha las tareas al clickear sobre ellas.

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    };

    const handleAddTodo = ( newTodo ) => { // Agrega un todo a la lista

        dispatch({
            type: 'add',
            payload: newTodo
        });

    };

    // const handleSubmit = (e) => {
    //     e.preventDafault();

    //     if( description.trim().length <= 1) { // Para no poder ingresar un todo en blanco
    //         return;
    //     }

    //     const newTodo = { // Es el nuevo todo a agregar
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false 
    //     }

    //     // const action = { // Es la accion que se quiere realizar, el de agregar en este caso
    //     //     type: 'add',
    //     //     payload: newTodo
    //     // }

    //     dispatch( action ); // Para agregarlo se usa la funcion dispatch para enviarlo al todoReducer
    //     reset(); // Para que la caja de formulario se resetee luego de agregar un todo. 
    // };

    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    {/* TodoList, todos, handleDelete, handleToggle */}
                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } 
                    />

                </div>

                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                    
                </div>

            </div>

        </div>
    )
}
