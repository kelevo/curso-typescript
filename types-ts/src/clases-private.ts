export {};

enum PhotoOrientation {
    Landscate,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades de esta entidad
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    // Atributos necesarios para inicializar el objeto
    public constructor(id: number, title: string, orientarion: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientarion;
    }

    // Comportamiento que tiene la clase
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    private id: number;
    private title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
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
// picture.id = 100; // private
// picture.title = 'Eli te amo'; // private
// album.title = 'Hola mundo desde TS'; // private
console.log('album', album);