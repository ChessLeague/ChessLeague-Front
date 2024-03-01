import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GameDetail } from './game-detail';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl: string = environment.baseUrl + 'games';
  constructor(private http: HttpClient) { }

  getGames(page: number, size: number): Observable<GameDetail[]> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<GameDetail[]>(this.apiUrl, {params: params});
  }

  getGame(id: string): Observable<GameDetail> {
    return this.http.get<GameDetail>(`${this.apiUrl}/${id}`);
  }

  getCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

}
