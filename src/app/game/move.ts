import { Player } from "../player/player";

export class Move {
    id: number;
    notation: string;
    player: Player

    constructor(id: number, notation: string, player: Player) {
        this.id = id;
        this.notation = notation;
        this.player = player;
    }
}