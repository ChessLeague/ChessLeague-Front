import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentDetail } from '../tournament-detail';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css']
})
export class TournamentDetailComponent implements OnInit {

  tournamentId!: string;
  @Input() tournamentDetail!: TournamentDetail;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService) { }

  getTournament() {
    this.tournamentService.getTournament(this.tournamentId).subscribe(tournament => {
      this.tournamentDetail = tournament;
    })
  }

  ngOnInit() {
    if(this.tournamentDetail == undefined){
      this.tournamentId = this.route.snapshot.paramMap.get('id')!
    if(this.tournamentId){
      this.getTournament();
    }
    }
  }

}
