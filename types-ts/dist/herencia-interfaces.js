"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscate"] = 0] = "Landscate";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};
const picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Landscate
};
// Cambiar el estado de los objetos
let newPicture = {};
newPicture.id = 1;
newPicture.title = 'Moon';
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
