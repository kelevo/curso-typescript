"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _title_1, _pictures;
Object.defineProperty(exports, "__esModule", { value: true });
// TS -> 3.8+
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscate"] = 0] = "Landscate";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    // Atributos necesarios para inicializar el objeto
    constructor(id, title, orientarion) {
        // Propiedades de esta entidad
        _id.set(this, void 0);
        _title.set(this, void 0);
        _orientation.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _orientation, orientarion);
    }
    // Comportamiento que tiene la clase
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _id)}, title: ${__classPrivateFieldGet(this, _title)}, orientation: ${__classPrivateFieldGet(this, _orientation)}]`;
    }
}
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
class Album {
    constructor(id, title) {
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    }
}
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
const album = new Album(1, 'Hello World');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los miembros publicos ---------------
// picture.id = 100; // private
// picture.title = 'Eli te amo'; // private
// album.title = 'Hola mundo desde TS'; // private
console.log('album', album);
