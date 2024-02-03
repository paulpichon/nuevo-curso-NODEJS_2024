import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {

    test('Should create table with default values', () => {
        // crear una instancia de mi clase CreateTable
        const createTable = new CreateTable();
        // tabla
        const table = createTable.execute({ base: 2 });
        // rows = lineas
        const rows = table.split('\n').length;


        console.log( table );
        
        // evaluar que createTable sea una instancia de la clase CreateTable 
        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('2 x 1 = 2'); 
        expect( table ).toContain('2 x 10 = 20'); 
        expect( rows ).toBe( 10 );
    });


    test('should create table with custom values', () => {
        //siujeto de pruebas
        const createTable = new CreateTable();
        // options
        const options = {
            base: 3,
            limit: 20
        }
        // tabla
        const table = createTable.execute(options);
        // rows = lineas, largo de los registros
        const rows = table.split('\n').length; 

        // expects
        expect( table ).toContain('3 x 1 = 3');
        expect( table ).toContain('3 x 10 = 30');
        expect( table ).toContain('3 x 20 = 60');
        expect( rows ).toBe( options.limit );
        
          

    });

});