export class Administrator {
    id: number;
    name: string;
    photoURL: string;
    IDNumber: string;
    username: string;
    password: string;

    constructor(id: number, name: string, photoURL: string, IDNumber: string, username: string, password: string) {
        this.id = id;
        this.name = name;
        this.photoURL = photoURL;
        this.IDNumber = IDNumber;
        this.username = username;
        this.password = password;
    }
}
