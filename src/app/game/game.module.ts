import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { GameListComponent } from './game-list/game-list.component';
import { GameRoutingModule } from './game-routing.module';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    GameRoutingModule
  ],
  exports: [GameListComponent],
  declarations: [GameListComponent, GameDetailComponent]
})
export class GameModule { }
