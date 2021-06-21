import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';



describe('Pruebas <LoginScreen />', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        

        wrapper.find('button').prop('onClick')(); // simula el click llamando a la funcion dentro, es decir, el setUser con su respectivo arg
        expect( setUser ).toHaveBeenCalledWith({ // aca espero que el setUser se haya llamado con el mismo arg que esta en LoginScreen
            id:123,
            name: 'Paul'
        });

    })
    
    
})
