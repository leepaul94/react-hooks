import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';


describe('Pruebas en useFetch', () => {
    
    test('debe de retornar la informacion por defecto', () => {
        
        const { result } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' )); // renderHook() Crea un componente virtual y coloca el custom hooks. Se llama una funcion y dentro de dicha funcion ejecutar el custom hook.
        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
    });
    
    test('debe de retornar la info deseada, loading false, error false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' )); // renderHook() Crea un componente virtual y coloca el custom hooks. Se llama una funcion y dentro de dicha funcion ejecutar el custom hook.
        
        await waitForNextUpdate({timeout:5000}); // le pongo el time out de 5 seg porque me tarda mas de 1 seg

        const { data, loading, error } = result.current; 
        
        expect( data.length ).toBe(1);
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    });
    
    test('debe de manejar el error', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://reqres.in/apid/users?page=2' )); // es un url de pruebas. Le agrego la "d" a "api" para que me de un error.
        
        await waitForNextUpdate({timeout:5000}); // le pongo el time out de 5 seg porque me tarda mas de 1 seg

        const { data, loading, error } = result.current; 
        
        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la info' );
    });

})
