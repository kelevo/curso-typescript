"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'username']
let user;
user = [1, 'patrickhernandez'];
console.log('user', user);
// Accediendo al identificador y al valor de cadena
console.log('username', user[1]);
// Podemos aplicar propiedades
console.log('username.length', user[1].length);
console.log('username', user[0]);
// Tuplas con varios valores -------------------------
// id, username, isPro
let userInfo;
userInfo = [2, 'patrick', true];
console.log('userInfo', userInfo);
// Arreglo de tuplas ----------------------------------
let array = [];
array.push([1, 'patrick']); // 0
array.push([2, 'elizabeth']); // 1
array.push([3, 'bruno']); // 2
console.log('array', array);
// Uso de funciones Array -----------------------------
// bruno -> neftali
array[2][1] = array[2][1].concat(' neftali');
console.log('array', array);
