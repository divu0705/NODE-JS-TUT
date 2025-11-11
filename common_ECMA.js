//1) Common module  
//If your package.json has "type": "commonjs"
//if it doesn't has this too then also common module will be used as it's deafault
//Works with require() and module.exports.


const add = require('./math_common');
console.log(add(2, 3));


//ES Modules (ESM / ECMAScript Modules)
//not default so use "type": "module" in package.json
//Works with import and export.

//import {add} from "./math_ecma.mjs"
//console.log(add(5,6));

//THIS WILL TRHOW ERROR BCZ WE KNOW THAT WE USED THE SAME FILE FOR BOTH
//EITHER WE SHOULD HAVE CORRECTED THE TYPE AS MODULE OR ADDED AN EXTENSION OF .mjs

