import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server.app";

// funcion asincrona autoinvocada
(async () => {
    await main();
})();



async function main() {
    // desestructurar de yarg
    const { b:base, l:limit, s:showTable, n: fileName, d: fileDestination } = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });   
}