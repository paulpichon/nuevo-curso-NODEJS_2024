// importar el fileSystem
import fs from "fs";

// caso de uso
export interface SaveFileUseCase {
    execute: (options: Options ) => boolean;
}
// las opciones del caso de uso
export interface Options {
    fileContent : string;
    fileDestination?: string;
    fileName?   : string;
}

// caso de uso | clase
export class SaveFile implements SaveFileUseCase {

    constructor(
        /*
            repository: StorageRepository       
        */
    ) {}

    // metodos
    execute( { 
        fileContent, 
        fileDestination = 'outputs', 
        fileName = 'table' 
    }: Options ): boolean {
        try {
            // creacion dle directorio
            fs.mkdirSync(fileDestination, { recursive: true } );
            // guardar en un archivo
            fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent);
            return true;
        } catch (error) {
            console.error( error );
            return false;
        }
    }

}

