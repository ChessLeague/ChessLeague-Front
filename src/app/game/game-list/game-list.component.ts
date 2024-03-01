import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetail } from '../game-detail';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Array<GameDetail> = [];
  p: number = 1;
  itemsPerPage: number = 4;
  pagesNumber: number = 1;
  pagination: boolean = false;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkRoute();
    this.getGames();
  }

  getGames() {
    this.gameService.getCount().subscribe(count => {
      this.pagesNumber = Math.ceil(count / this.itemsPerPage);
    });
    this.gameService.getGames(this.p-1, this.itemsPerPage).subscribe(games => {
      this.games = games;
    });
  }

  checkRoute() {
    const routePath = this.route.snapshot.routeConfig?.path;
    if (routePath === 'list') {
      this.itemsPerPage = 8;
      this.pagination = true;
    }
  }

}
