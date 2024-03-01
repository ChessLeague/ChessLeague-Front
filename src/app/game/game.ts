import { Opening } from "../opening/opening";
import { Tournament } from "../tournament/tournament";

export class Game {
    id: number;
    result: string;
    date: any;
    image: string;
    tournament: Tournament;
    opening: Opening;

    constructor(id: number, result: string, date: any, image: string, tournament: Tournament, opening: Opening) {
        this.id = id;
        this.result = result;
        this.date = date;
        this.image = image;
        this.tournament = tournament;
        this.opening = opening;
    }
}
