import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = "Hello I am Gokú";
    const subTitle = "It's subtitle";

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hello, I am Gokú"', () => {
        render( <FirstApp title={ title } />);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el título en un h1', () => { 
        render( <FirstApp title={ title }/>);
        expect( screen.getByRole('heading', {level: 1}) .innerHTML ).toContain( title ) //equivale al h1 y se pone toContain, en caso hayga espacios
    });
    
    test('debe de mostrar el subtítulo enviado por props. ', () => { 
        render( <FirstApp 
            title={ title }
            subTitle={ subTitle }
            />);
        expect( screen.getAllByText(subTitle).length ).toBe(2);            
    
    });
});