console.log('Hola Platzi');

// Number -----------------------------

// Explicito (postfijo)
let phone: number;
phone = 1;
phone = 3456768;
// phone = 'hola';

// Inferido
let phoneNumber = 2345678;
phoneNumber = 333333;
// phoneNumber = true;

// Binario
let hex: number = 0xf00d;

// Hexadecimal
let binary: number = 0

// Octal
let octal: number = 0o744;

// Tipo: Boolean ----------------------

// Tipado explicito
let isPro: boolean;
isPro = true;

// Inferido
let isUsePro = false;
isUsePro = true;
// isUsePro = 10;

// Tipo: String -----------------------

let username: string = 'patrick';
username = "Jhonatan";
// username = true; // Error

// Template String / uso de back-tick
let userInfo: string;
userInfo = `
    User Info:
    User Name: ${username}
    firstName: ${username + ' Hernandez '}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
