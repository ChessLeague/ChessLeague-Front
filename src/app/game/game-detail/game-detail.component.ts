import { Component, Input, OnInit } from '@angular/core';
import { GameDetail } from '../game-detail';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() gameDetail!: GameDetail;
  gameId!: string;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.displayGame();
    window.scrollTo(0, 0);
  }

  displayGame() {
    if (this.gameDetail === undefined) {
      this.gameId = this.route.snapshot.paramMap.get('id')!;
      if (this.gameId) {
        this.getGame();
      }
    }
  }

  getGame() {
    this.gameService.getGame(this.gameId).subscribe(game => {
      this.gameDetail = game;
    })
  }

}
