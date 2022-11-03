
describe('Pruebas en <DemoComponmet />', () => {

    
    test('Esta prueba no debe de fallar', () => {
    
        //1.-Inicialización
        const message1 = 'Hello World';
    
        //2.-Estímulo
        const message2 = message1.trim();
    
        //3.-Observar el comportamiento... esperado
        // expect( message1 ).toBe( message2 );
        expect( message1 ).toBe( message2 );
    });

})

