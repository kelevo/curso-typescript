"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usamos TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//     console.log('create Picture using', title, date, size);
// }
// createPicture('My Birthday', '20 de enero', '500*500');
// createPicture('Mexico 2021', '200 de enero de 2021'); // Error
// ------------------------------------------------------------------------
// Poder pasar a la funcion solo dos parametros aunque requiera tres
// Parametros opcionales en funciones
function createPicture(title, date, size) {
    console.log('create Picture using', title, date, size);
}
createPicture('My Birthday', '20 de enero', '500*500');
createPicture('My Birthday', '20 de enero');
createPicture('My Birthday');
createPicture();
// --------------------------------------------------------------------------
// Flat array functions
let createPic = (title, date, size) => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // }
    return { title, date, size };
};
const picture = createPic('Platzi session', '2021-03-10', '100*100');
console.log('picture', picture);
// Tipo de retorno con TS ----------------------------------------------------
function handleError(code, message) {
    // Procesamiento del codigo o del mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return `An error has occurred`;
    }
}
try {
    let result = handleError(200, 'OK'); // Retorna string
    console.log('result', result);
    result = handleError(404, 'error'); // Retorna never
    console.log('result', result);
}
catch (error) {
    // code
}
