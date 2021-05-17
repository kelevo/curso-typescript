export {};

enum PhotoOrientation {
    Landscate,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // Copia de los atributos de entity
    description: string;
}

interface Picture extends Entity {
    // Copia de los atributos de entity
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};

const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Landscate
}

// Cambiar el estado de los objetos
let newPicture = {} as Picture;
newPicture.id = 1;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
