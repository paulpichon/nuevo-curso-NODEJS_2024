// importamos fs: file system, nativo de NODEJS
import fs from 'fs';
// clase SaveFile del archivo save-file.use-case.ts
import { SaveFile } from './save-file.use-case';


describe('SaveFileUseCase', () => {

    // borrar la carpeta despues de cada prueba
    afterEach(() => {
        // borrar el archivo: clean Up
        fs.rmSync('outputs', { recursive: true });
    });

    test('should save file with default values', () => {
        // creamos la instancia de la clase SaveFile()
        const saveFile = new SaveFile();
        // file Path
        const filePath = 'outputs/table.txt';
        // al ser lo unico obligatorio fileContent
        const options = {
            fileContent: 'test content'
        }

        // creamos un resultado y mandamos las opciones
        const result = saveFile.execute(options);
                
        const fileExists = fs.existsSync(filePath);// aqui debemos tener cuidado porque podria dar un falso positivo
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        
        // expect
        // experamos que sea un true
        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );
    });

});