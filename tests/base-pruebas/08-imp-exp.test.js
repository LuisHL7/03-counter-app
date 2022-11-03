import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas es 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un héroe por ID', () => { 
    
        const id= 1;
        const hero = getHeroeById(id);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        // expect( hero ).toBeFalsy(); //evalua si es nulo, undefined o false        
    
    })

    test('getHeroesByOwner debe de retornar heroes de dc', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'}
        ]);
        //Método mas eficiente para validar los que son de DC
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    });

    test('getHeroesByOwner debe de retornar un heroe de marvel', () => { 
        
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    })
})