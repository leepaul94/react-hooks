


export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); // el payload va a ser el id
        
        case 'toggle': // Version corta con return implicito y condicional ternario
            return state.map( todo => 
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case 'toggle-old': // Version larga de toggle
            return state.map( todo => {
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo; // si no se cumple tengo que devolver si o si todo porque sino me devuelve undefined
                }
            });

        default: // cuando se inicializa
            return state;
    }

}