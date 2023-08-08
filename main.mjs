// main.mjs

// Importing default exported array from 'importArray.mjs'
import myArray from "./importArray.mjs";

// Importing named export 'exportedArray' from 'exportArray.mjs'
import { exportedArray } from "./exportArray.mjs";

console.log("Default exported array:", myArray);
console.log("Named exported array:", exportedArray);
