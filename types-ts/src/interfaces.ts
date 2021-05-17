export {};

// Funcion para mostrar una fotografia
enum PhotoOrientation {
    Landscate,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientarion: ${picture.orientation}]`);
};

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

// Interfaces: propiedades opcionales -----------------------

interface PictureConfig {
    title?: string,
    date?: string,
    orientarion?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: 'DefaultDate'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic', date: '2021-05'});
console.log('picture', picture);

// Interfaces con propiedades de solo lectura ----------------------------

interface User {
    readonly id: number; // Solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'patrickhernandez', isPro: true};
console.log('user', user);
user.username = 'elizaethmontalvo';
console.log('user', user);
// user.id = 12; // Error
// console.log('user', user);