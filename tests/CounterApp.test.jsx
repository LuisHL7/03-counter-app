import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => { 

    const initialValue = 10;
    
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100', () => { 
        const value = 100;
        render( <CounterApp value={ value } />);
        expect( screen.getByText(value) ).toBeTruthy();

    });

    test('debe de incrementar con el botón +1', () => {
    
        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText( initialValue + 1 )).toBeTruthy();

    });


    test('debe de decrementar con el botón -1', () => {
    
        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('-1') )
        // screen.debug() //para ver el estado del dom, de como se vería despues de que corra el test
        expect( screen.getByText( initialValue - 1 )).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => { 
        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        // fireEvent.click( screen.getByText('Reset') )
        //Otra forma de llamar a los botones, por el aria-label
        fireEvent.click( screen.getByRole('button',{ name: 'btn-reset'}));
        expect( screen.getByText(10)).toBeTruthy();
        screen.debug();
     })

});