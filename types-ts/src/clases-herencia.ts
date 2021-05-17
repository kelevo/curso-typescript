export {};

enum PhotoOrientation {
    Landscate,
    Portrait,
    Square,
    Panorama
}

// Superclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
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
    set title(title: string) {
        // Cambiar el estado de nuestro modificador
        this._title = title;
    }
}

class Picture extends Item{
    public static photoOrientarion = PhotoOrientation;

    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientarion: PhotoOrientation) {
        // Invocamos al constructor con super()
        super(id, title);
        this._orientation = orientarion;
    }

    get orientation() {
        return this._orientation;
    }
    set orientation(orientation: PhotoOrientation) {
        // Cambiar el estado de nuestro modificador
        this._orientation = orientation;
    }

    // Comportamiento que tiene la clase
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album extends Item {
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title); // Constructor de super clase
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Hello World');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los miembros publicos ---------------
console.log('picture.id', picture.id) // get id()

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