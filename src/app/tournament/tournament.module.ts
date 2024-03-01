import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';
import { TournamentRoutingModule } from './tournament-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    TournamentRoutingModule
  ],
  exports: [TournamentListComponent],
  declarations: [TournamentListComponent, TournamentDetailComponent]
})
export class TournamentModule { }
