// para poder imprimir en consola
import fs from 'fs';

// Tablas de multiplicar
let outPutMesssage = '';
const base = 5;
const headerMessage = `
    ================================================
                 TABLAS DEL ${ base }               
    ================================================\n
`;

for (let i = 1; i <= 10; i++) {
    
    outPutMesssage += `${ base } x ${ i } = ${ base * i }\n`;
    
}
// imprimir en consola
outPutMesssage = headerMessage + outPutMesssage;

// crear caroeta donde iran las tablas
const outputPath = `output`;
// creacion dle directorio
fs.mkdirSync(outputPath, { recursive: true } );

// guardar en un archivo
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outPutMesssage);
console.log('File created');



