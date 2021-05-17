export {};

enum PhotoOrientation {
    Landscate,
    Portrait,
    Square,
    Panorama
}

// get y set

class Picture {
    // Propiedades de esta entidad
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    // Atributos necesarios para inicializar el objeto
    public constructor(id: number, title: string, orientarion: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientarion;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        // Cambiar el estado de nuestro modificador
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title: string) {
        // Cambiar el estado de nuestro modificador
        this._title = title;
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

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
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

picture.id = 100; // private, set id(100);
picture.title = 'Eli te amo'; // private
album.title = 'Hola mundo desde TS'; // private
console.log('album', album);