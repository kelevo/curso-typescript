"use strict";
// Corchetes [] ---------------------------------------------
// Tipo explicito
var users;
users = ['patrick', 'elizabeth', 'bruno'];
// La diferencia con los arreglos en JS radica en la
// verificacion de tipos que hace nuestro compilador
// users = [1, true, 'test']; // Error
// Tipo inferido
var otherUsers = ['patrick', 'elizabeth', 'bruno'];
// Array<TIPO> ----------------------------------------------
var pictureTitles;
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
