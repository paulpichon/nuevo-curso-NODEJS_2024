// importamos yargs
import yargs from 'yargs';
// hideBin
import { hideBin } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv) )
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limite',
        type: 'number',
        default: 10,
        description: 'Limite de la tabla de multiplicar'
    })
    .option('s', {
        alias:'show',
        type: 'boolean',
        default: false,
        description: 'Mostrar la tabla de multiplicacion'
    })
    // las options no seran usadas
    .check(( argv, options ) => {
        
        // validar que el numero de base sea mayor a 0
        // en caso de que sea menor se lanza el error
        if( argv.b < 1) throw 'Error: la Base debe ser un numero mayor a 0';

        return true;
    })
  .parseSync()