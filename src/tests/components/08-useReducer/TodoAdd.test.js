import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        />
    );

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('no debe de llamar a handleAddTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit'); // es otra manera de obtener una funcion diferente de la simulacion con simulate. 
                                                                  //Obtengo la funcion de handleSubmit
        formSubmit({ preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar a la funcion handleAddTodo ', () => {

        const value = 'Aprender Node';
        wrapper.find('input').simulate('change', { target: { value, name: 'description' } }); // al poner el name que es el nombre del campo que quiero cambiar
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes(1); // espero que se haya llamado una vez
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // espero que el handleAddTodo recibe como argumento un objeto. Esta evaluacion no es suficiente
        expect( handleAddTodo ).toHaveBeenCalledWith({ // Espero que el argumento que reciba sea este objeto
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
    
    
})
