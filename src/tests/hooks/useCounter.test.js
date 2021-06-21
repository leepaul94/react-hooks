import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";


describe('Pruebas en useCounter', () => {
    
    test('debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        
        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );

    });

    test('debe de tener el counter en 100', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) );
        
        expect( result.current.counter ).toBe( 100 );
        
    });
    
    test('debe de incrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) ); // es para poder usar el hook useCounter
        const { increment } = result.current; // obtengo la funcion de incrementar

        act( () => { // se usa act para poder usar la funcion increment que tiene que estar dentro de un  callback estipulado por act

            increment()

        });

        const { counter } = result.current; // obtengo el rtado final con el incremento
        expect( counter ).toBe(101);

    });

    test('debe de decrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) ); // es para poder usar el hook useCounter
        const { decrement } = result.current; // obtengo la funcion de incrementar

        act( () => { // se usa act para poder usar la funcion increment que tiene que estar dentro de un  callback estipulado por act

            decrement()

        });

        const { counter } = result.current; // obtengo el rtado final con el incremento
        expect( counter ).toBe(99);

    });

    test('debe de resetear el counter', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) ); // es para poder usar el hook useCounter
        const { increment, reset } = result.current; // obtengo la funcion de incrementar

        act( () => { // se usa act para poder usar la funcion increment que tiene que estar dentro de un  callback estipulado por act

            increment();
            reset();

        });

        const { counter } = result.current; // obtengo el rtado final con el incremento
        expect( counter ).toBe(100);

    })
    

})
