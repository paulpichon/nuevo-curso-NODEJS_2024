// importamos fs: file system, nativo de NODEJS
import fs from 'fs';
// clase SaveFile del archivo save-file.use-case.ts
import { SaveFile } from './save-file.use-case';


describe('SaveFileUseCase', () => {
    // al ser lo unico obligatorio fileContent
    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name'
    }
    // path a evaluar
    // file Path
    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    // borrar la carpeta despues de cada prueba
    afterEach(() => {

        const outputFolderExist = fs.existsSync('outputs');
        // borrar el archivo: clean Up
        if ( outputFolderExist ) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExist = fs.existsSync(customOptions.fileDestination);
        // borrar el archivo: clean Up
        if ( customOutputFolderExist ) fs.rmSync(customOptions.fileDestination, { recursive: true });
        
    });

    test('should save file with default values', () => {
        // creamos la instancia de la clase SaveFile()
        const saveFile = new SaveFile();
        // file Path
        const customFilePath = 'outputs/table.txt';
        // al ser lo unico obligatorio fileContent
        const customOptions = {
            fileContent: 'test content'
        }

        // creamos un resultado y mandamos las opciones
        const result = saveFile.execute(customOptions);
                
        const fileExists = fs.existsSync(customFilePath);// aqui debemos tener cuidado porque podria dar un falso positivo
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

        
        // expect
        // experamos que sea un true
        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( customOptions.fileContent );
    });

    test('should save file with custom values', () => {
        // creamos la instancia de la clase SaveFile()
        const saveFile = new SaveFile();
        
        const result = saveFile.execute( customOptions );
        const fileExists = fs.existsSync( customFilePath );
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });


        // expects
        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( customOptions.fileContent );

    });

});