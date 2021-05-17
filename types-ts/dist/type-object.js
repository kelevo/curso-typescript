"use strict";
// Type: Object
let user;
user = {}; // Object
user = {
    id: 1,
    username: 'patrick',
    firstName: 'Patrick',
    isPro: true
};
console.log('user', user);
// Object vs object (Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'patrick',
    firstName: 'Patrick',
    isPro: true
};
const isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('myObj.username', myObj.username);
