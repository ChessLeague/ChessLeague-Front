import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { TournamentModule } from './tournament/tournament.module';
import { LeagueModule } from './league/league.module';
import 'bootstrap';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TournamentModule,
    LeagueModule,
    GameModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }