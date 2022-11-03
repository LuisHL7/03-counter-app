import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
   
    // test('Debe de hacer match con el snapshot', () => {

    //     const title = "Hello I am Gokú";
    //     const {container} = render( <FirstApp title={ title } />)

    //     expect( container ).toMatchSnapshot();

    // }); Solo se hace en la parte de producción, no en el desarrollo

    test('debe de mostrar el título en un h1', () => {

        const title = "Hello I am Gokú";
        const {container, getByText, getByTestId} = render( <FirstApp title={ title } />)
        expect( getByText(title) ).toBeTruthy();//que el título existe una vez

        expect(getByTestId('test-title').innerHTML ).toBe( title );
        // expect(getByTestId('test-title').innerHTML ).toContain( title );
        //usando js en react
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe( title );

    });

    test('debe de mostrar el subtítulo enviado por props', () => { 

        const title = 'Hola, Soy Gokú';
        const subTitle = 'Soy un subtítulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle } 
            />
    );            
        expect( getAllByText(subTitle).length ).toBe(2);//que el subtítulo existe más de una vez

    })
});