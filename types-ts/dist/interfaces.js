"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para mostrar una fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscate"] = 0] = "Landscate";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientarion: ${picture.orientation}]`);
}
;
let myPic = {
    title: 'Test title',
    date: '2020-05',
    orientation: PhotoOrientation.Landscate
};
showPicture(myPic);
showPicture({
    title: 'Test title',
    date: 'enero-2020',
    orientation: PhotoOrientation.Portrait
});
function generatePicture(config) {
    const pic = { title: 'Default', date: 'DefaultDate' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'patrickhernandez', isPro: true };
console.log('user', user);
user.username = 'elizaethmontalvo';
console.log('user', user);
// user.id = 12; // Error
// console.log('user', user);
