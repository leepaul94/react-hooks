import React from 'react';
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { act } from 'react-dom/test-utils';
import { demoTodos } from '../../fixtures/demotodos';


describe('Pruebas en <TodoApp />', () => {

    // el storage ya viene de por si. el prototype es un metodo dentro y el setItem lo mismo.
    Storage.prototype.setItem = jest.fn(() => {});
    
    const wrapper = shallow(<TodoApp />);

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    }); 

    test('debe de agregar un TODO', () => {
        
        const wrapper = mount( <TodoApp /> );

        act( () => { // como quiero realizar una modificacion, tengo que envolver las funciones en un act.
            wrapper.find('TodoAdd').prop( 'handleAddTodo' )( demoTodos[0] ); // es una funcion que recibe un arg demotodos[0] para que se agregue
            wrapper.find('TodoAdd').prop( 'handleAddTodo' )( demoTodos[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp ( 2 )' );
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    })

    test('debe de eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp ( 0 )' );

    })
    
    
    
})
