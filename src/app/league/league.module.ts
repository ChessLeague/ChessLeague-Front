
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueListComponent } from './league-list/league-list.component';
import { RouterModule } from '@angular/router';
import { LeagueRoutingModule } from './league-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LeagueRoutingModule
  ],
  declarations: [LeagueListComponent]
})
export class LeagueModule { }
