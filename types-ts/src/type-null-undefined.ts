// Null ----------------------------------------

// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error

// Infiere su tipo como un any
let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// Undefined -------------------------------------

let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error

// Infiere el tipo como un any
let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null y Undefined: como subtipos -------------------------------

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;