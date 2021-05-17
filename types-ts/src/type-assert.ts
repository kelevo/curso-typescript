export{};

// <tipo_de_dato> // Angle Bracket syntax
let username: any;
username = 'patrickhernandez';

// Tenemos una cadena, TS confia en mi!!
let message: string = (<string>username).length > 5 ? `Welcome ${username}` :`Username is too short`;
console.log('message', message);

// Otro ejemplo

let usernameWithId: any = 'elizabeth 1';
// Como obtener el username a partir de la anterior expresion?
username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username);

// Sintaxis 'as'
message = (username as string).length > 5 ? `Welcome ${username}` :`Username is too short`;
console.log('message', message);

let helloUser: any;
helloUser = 'hello elizabeth';
username = (helloUser as string).substring(6);
console.log('username', username);
