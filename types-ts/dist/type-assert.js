"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo_de_dato> // Angle Bracket syntax
let username;
username = 'patrickhernandez';
// Tenemos una cadena, TS confia en mi!!
let message = username.length > 5 ? `Welcome ${username}` : `Username is too short`;
console.log('message', message);
// Otro ejemplo
let usernameWithId = 'elizabeth 1';
// Como obtener el username a partir de la anterior expresion?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
// Sintaxis 'as'
message = username.length > 5 ? `Welcome ${username}` : `Username is too short`;
console.log('message', message);
let helloUser;
helloUser = 'hello elizabeth';
username = helloUser.substring(6);
console.log('username', username);
