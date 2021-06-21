import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Paul',
        email: 'leepaul@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current; 

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current; 

        act( () => {

            handleInputChange({ // estoy simulando el evento que tiene un name y un value.
                target: {
                    name: 'name',
                    value: 'Fernando'
                }
            });

        });

        const [ values ] = result.current;

        expect( values ).toEqual({ ...initialForm, name: 'Fernando'});

    });
    
    test('debe de reestablecer el formulario con RESET', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current; 

        act( () => {

            handleInputChange({ // estoy simulando el evento que tiene un name y un value.
                target: {
                    name: 'name',
                    value: 'Fernando'
                }
            });

            reset();

        });

        const [ values ] = result.current;

        expect( values ).toEqual( initialForm );
                
    });

})
