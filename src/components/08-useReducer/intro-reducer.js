
const initialState = [{ // estado inicial que es un arreglo de todos
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state= initialState, action ) => { // reducer que es una simple funcion que recibe el estado inicial que tiene por default el objeto de arriba y la action. La action es quien va a modificar el state.
                                                         // Tiene que resolverse unicamente con los argumentos que recibe y retorna siempre un nuevo estado.
    if( action?.type === 'agregar' ) { //el signo ? esta para ver si tiene algo la varible accion y asi evaluar o no la condicion
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const agregarTodoAction = {
    type: 'agregar', // el type es la accion que se debe de realizar
    payload: newTodo // el payload es una convencion entre los desarrolladores asi ya se sabe que es cuando lo ven
};

todos = todoReducer( todos, agregarTodoAction);

console.log(todos);