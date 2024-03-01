import { Game } from "./game";
import { Move } from "./move";
import { Tournament } from "../tournament/tournament";
import { Opening } from "../opening/opening";
import { Player } from "../player/player";
import { Comment } from "./comment";

export class GameDetail extends Game {
    players: Array<Player> = [];
    moves: Array<Move> = [];
    comments: Array<Comment> = [];

    constructor(id: number, result: string, date: any, image: string, tournament: Tournament, opening: Opening, players: Array<Player>, moves: Array<Move>, comments: Array<Comment>) {
        super(id, result, date, image, tournament, opening);
        this.players = players;
        this.moves = moves;
        this.comments = comments;
    }
}
