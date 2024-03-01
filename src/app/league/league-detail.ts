import { Tournament } from "../tournament/tournament";
import { League } from "./league";

export class LeagueDetail extends League {
    tournaments: Array<Tournament> = [];

    constructor(id: number, name: string, city:string, address:string, phone:string, webUrl:string, tournaments: Array<Tournament>) {
    super(id, name, city, address, phone, webUrl);
    this.tournaments = tournaments;
    }

}