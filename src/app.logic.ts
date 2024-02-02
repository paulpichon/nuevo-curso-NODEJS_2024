// para poder imprimir en consola
import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

// desestructurar de targ
const { b:base, l:limit, s:showTable } = yarg;


// Tablas de multiplicar
let outPutMesssage = '';
// const base = 5;
const headerMessage = `
    ================================================
                 TABLAS DEL ${ base }               
    ================================================\n
`;

for (let i = 1; i <= limit; i++) {
    
    outPutMesssage += `${ base } x ${ i } = ${ base * i }\n`;
    
}
// imprimir en consola
outPutMesssage = headerMessage + outPutMesssage;
// imprimimos en consola si y solo si showTable es true
if (showTable) {
    console.log(outPutMesssage);   
}

// crear caroeta donde iran las tablas
const outputPath = `output`;
// creacion dle directorio
fs.mkdirSync(outputPath, { recursive: true } );

// guardar en un archivo
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outPutMesssage);
console.log('File created');



