import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'patrickhernandez', 'Patrick', true);
const album = new Album(10, 'Platzi Picture');
const picture = new Picture(1, 'TypeScript Course', '2020-05', PhotoOrientation.Landscape);

// Relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

// Borramos album
user.removeAlbum(album);
console.log('user', user);