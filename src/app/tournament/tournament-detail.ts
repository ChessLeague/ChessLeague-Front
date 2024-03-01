import { Tournament } from "./tournament";
import { Game } from "../game/game";
import { League } from "../league/league";

export class TournamentDetail extends Tournament {
    games: Array<Game> = [];

    constructor(id: number, name: string, location: string, date: any, prize: string, image: string, league: League, games: Array<Game>) {
        super(id, name, location, date, prize, image, league);
        this.games = games;
    }
}
