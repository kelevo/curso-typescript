"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let idUser;
idUser = 10;
idUser = '10';
function getUsernameById(id) {
    return 'holamundo';
}
getUsernameById(20);
getUsernameById('30');
// El compilador solo dejara asignar una de las medidas previamente asignadas
// let smallPicture: SquareSize = '200*200'; // Error
let smallPicture = '100*100';
