export{};

// Combinacion de tipos ------------------------------

// 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar username dado un ID
// function getUsernameById(id: number | string) {
//     // Logica de negocio, find the user
//     return 'patrickhernandez';
// }

// getUsernameById(20);
// getUsernameById('30');

// Alias de tipos en --------------------------------

type IdUser = number | string;
// Alias de un solo tipo
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

function getUsernameById(id: IdUser): Username {
    return 'holamundo';
}

getUsernameById(20);
getUsernameById('30');

// Tipos literales ---------------------------------

// 100*100, 500*500, 1000*1000
type SquareSize = '100*100' | '500*500' | '1000*1000';
// El compilador solo dejara asignar una de las medidas previamente asignadas
// let smallPicture: SquareSize = '200*200'; // Error
let smallPicture: SquareSize = '100*100';