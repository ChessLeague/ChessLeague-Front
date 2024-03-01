export class League {
    id: number;
    name: string;
    city: string;
    address: string;
    phone: string;
    webURL: string;

    constructor(id: number, name: string, city: string, address: string, phone: string, webURL: string) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.address = address;
        this.phone = phone;
        this.webURL = webURL;
    }
}
