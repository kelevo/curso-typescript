enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1, // 1
    Square = 2, // 2
    Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[0]);

// Indices personalizados ---------------------------------------

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama // 13
}

console.log('portrait', PictureOrientation.Portrait);

// Otra forma de personalizar

enum Country {
    Bolivia = 'bol',
    Mexico = 'mex',
    Colombia = 'col',
    EUA = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country);