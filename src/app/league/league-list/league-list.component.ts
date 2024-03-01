import { Component, OnInit } from '@angular/core';
import { LeagueDetail } from '../league-detail';
import { LeagueService } from '../league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent implements OnInit {
  leagues: Array<LeagueDetail> = [];
  selected: Boolean = false;
  p: number = 1;
  itemsPerPage: number = 2; // Cambiado a 2 ligas por página
  pagesNumber: number = 1;
  pagination: boolean = false;

  constructor(private leagueService: LeagueService, private route: ActivatedRoute) {}

  getLeagues(): void {
    this.leagueService.getLeagues().subscribe(leagues => {
      this.leagues = leagues;
      this.calculatePagesNumber();
    });
  }

  getPages(): number[] {
    const pagesArray = [];
    for (let i = 1; i <= this.pagesNumber; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  ngOnInit() {
    this.getLeagues();
    this.checkRoute();
  }

  checkRoute() {
    const routePath = this.route.snapshot.routeConfig?.path;
    if (routePath === 'list') {
      this.pagination = true;
    }
  }

  calculatePagesNumber() {
    // Puedes ajustar la lógica según sea necesario
    this.pagesNumber = Math.ceil(this.leagues.length / this.itemsPerPage);
  }

  onPageChange(event: any): void {
    this.p = event;
  }
}
