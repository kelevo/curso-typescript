"use strict";
// Void -------------------------------------------------------------
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    // Automaticamente retorna void
    // return 'hola';
}
showInfo({ id: 1, username: 'Patrick', firstName: 'Patrick' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info: ', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'Patrick', firstName: 'Patrick' });
// Tipo void, como tipo de dato en una variable
let unusable;
// unusable = null;
// unusable = undefined;
// Tipo: Never -----------------------------------------------------------
function handleError(code, message) {
    // Process your code
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Nod Found');
}
catch (error) {
}
// function sumNumbers(limit: number): never {
//     let sum = 0;
//     while(true) {
//         sum++
//     }
//     // return sum;
// }
// sumNumbers(10);
// Ciclo infinito, el programa nunca termina
