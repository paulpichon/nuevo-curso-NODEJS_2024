// interface CreateTableUseCase
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

// interface CreateTableOptions
export interface CreateTableOptions {
    base: number;
    limit?: number;
}

// crear tabla
export class CreateTable implements CreateTableUseCase{

    constructor(
        /*
            DI - Dependency Injection        
        */ 
    ) {}

    // metodos

    // esto crea la tabla de multiplicar
    execute({ base, limit = 10}: CreateTableOptions) {
        let outPutMessage = '';
        for (let i = 1; i <= limit; i++) {
            outPutMessage += `${ base } x ${ i } = ${ base * i }`;
            
            if( i < limit ) outPutMessage += '\n';
            
        }
        return outPutMessage;
    }

}