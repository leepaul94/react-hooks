import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
// no me importa la implementacion, solo me importa los resultados
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    });
    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Paul',
                quote: 'Hola Mundo',

            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);

        expect( wrapper.find('.alert').exists() ).toBe( false ); // no debe de existir el loading. le pongo el "." porque lo estoy buscando segun la clase
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Paul' );

    })
    

})
