import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LeagueDetail } from './league-detail';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private apiUrl: string = environment.baseUrl + 'leagues';

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<LeagueDetail[]> {
    return this.http.get<LeagueDetail[]>(this.apiUrl);
  }

  getLeague(id: string): Observable<LeagueDetail> {
    return this.http.get<LeagueDetail>(this.apiUrl + "/" + id);
  }
}