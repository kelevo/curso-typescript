"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscate"] = 0] = "Landscate";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Superclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     // Cambiar el estado de nuestro modificador
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title) {
        // Cambiar el estado de nuestro modificador
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientarion) {
        // Invocamos al constructor con super()
        super(id, title);
        this._orientation = orientarion;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        // Cambiar el estado de nuestro modificador
        this._orientation = orientation;
    }
    // Comportamiento que tiene la clase
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
Picture.photoOrientarion = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // Constructor de super clase
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Hello World');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los miembros publicos ---------------
console.log('picture.id', picture.id); // get id()
// picture.id = 100; // private, set id(100);
picture.title = 'Eli te amo'; // private
album.title = 'Hola mundo desde TS'; // private
console.log('album', album);
// Creacion de objeto a partir de super clase
// Como Item ya es abstrac no podemos crear objetos a partir de ella
// const item = new Item(1, 'Test title'); // Error
// console.log('item', item);
// Probar miembro estatico de la clase picture
console.log('PhotoOrientation', Picture.photoOrientarion.Landscate);
