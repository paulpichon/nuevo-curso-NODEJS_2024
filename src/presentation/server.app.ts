// importamos la clase CreateTable
import { CreateTable } from "../domain/use-cases/create-table.use-case";
// clase SaveFile
import { SaveFile } from "../domain/use-cases/save-file.use-case";

// interfaz
interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

export class ServerApp {

    static run({ base, limit, showTable }: RunOptions ) {
        console.log('Server running');      
        // creamos una instancia CreateTable
        const table = new CreateTable().execute({ base, limit });
        // creacion del archivo
        const wasCreated = new SaveFile()
            .execute({ 
                fileContent: table,
                fileDestination: `outputs/table-${ base }`,
            });
        // log para mostrar la tabla
        if (showTable) console.log( table );
        // log para mostrar si el archivo fue creado o no
        ( wasCreated ) 
            ? console.log('Archivo creado')
            : console.error('Archivo no creado');
            
        
    }

}