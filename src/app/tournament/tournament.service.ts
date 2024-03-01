import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TournamentDetail } from './tournament-detail';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private apiUrl: string = environment.baseUrl + 'tournaments';
  constructor(private http: HttpClient) { }

  getTournaments(): Observable<TournamentDetail[]> {
    return this.http.get<TournamentDetail[]>(this.apiUrl);
  }

  getTournament(id: string): Observable<TournamentDetail> {
    return this.http.get<TournamentDetail>(this.apiUrl + "/" + id);
  }

}
