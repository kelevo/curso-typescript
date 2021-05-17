// Corchetes [] ---------------------------------------------

// Tipo explicito
let users: string[];
users = ['patrick', 'elizabeth', 'bruno'];
// La diferencia con los arreglos en JS radica en la
// verificacion de tipos que hace nuestro compilador
// users = [1, true, 'test']; // Error

// Tipo inferido
let otherUsers = ['patrick', 'elizabeth', 'bruno'];

// Array<TIPO> ----------------------------------------------

let pictureTitles: Array<string>;
pictureTitles = ['perros', 'ardillas', 'ajolotes'];

// Accediendo a los valores en un array ----------------------
console.log('first user', users[0]);
console.log('first animal', pictureTitles[0]);

// Procesar arreglos como objetos ----------------------------

// Propiedades en array
console.log('users.length', users.length);

// Uso de funciones en arreglos
users.push('rodolfo');
users.sort();
console.log('users', users);