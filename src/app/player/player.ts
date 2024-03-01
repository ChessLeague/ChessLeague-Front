export class Player {
    id: number;
    name: string;
    photoURL: string;
    birthDate: any;
    birthPlace: string;
    eloRating: number;
    username: string;
    password: string;

    constructor(id: number, name: string, photoURL: string, birthDate: any, birthPlace: string, eloRating: number, username: string, password: string) {
        this.id = id;
        this.name = name;
        this.photoURL = photoURL;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.eloRating = eloRating;
        this.username = username;
        this.password = password;
    }
}
