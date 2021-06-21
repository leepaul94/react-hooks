import React from 'react';
import { shallow } from "enzyme";
import { demoTodos } from '../../fixtures/demotodos';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle } 
        />
    );

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de tener dos <TodoListItem />', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        // console.log( wrapper.find('TodoListItem').at(0) );  
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) ); // at(0) para ver el de la posicion 0. Podria ser cualquiera de los dos objetos todo.
        // .prop('handleDelete') porque quiero ver la propiedad handleDelete y lo igualo para ver si es una funcion
        // Como lo creamos con jest.fn(), me van a aparecer si es que lo imprimimos con sus mocks que en definitiva son props o metodos del objeto jest.fn()
    })

})
