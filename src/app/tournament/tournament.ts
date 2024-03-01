import { th } from "@faker-js/faker";
import { League } from "../league/league";

export class Tournament {
    id: number;
    name: string;
    location: string;
    date: any;
    prize: string
    image: string;
    league: League;

    constructor(id: number, name: string, location: string, date: any, prize: string, image: string, league: League) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.prize = prize;
        this.image = image;
        this.league = league;
    }
}
