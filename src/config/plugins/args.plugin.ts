// importamos yargs
import yargs from 'yargs';
// hideBin
import { hideBin } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv) )
  .parseSync()