import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {newsResponse} from "../../app/news/news.model";
import {PlayerSummariesResponse} from "../../app/user/user.model";


@Injectable({
  providedIn: 'root'
})

export class SteamApiService {
  endPoint = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getGameNews(gameId: number): Observable<newsResponse> {
    return this.httpClient.get<newsResponse>(this.endPoint + `/getnews?${gameId}`)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  getPlayerSummaries(playerId: string): Observable<PlayerSummariesResponse> {
    return this.httpClient.get<PlayerSummariesResponse>(this.endPoint + `/getplayersummary?${playerId}`)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
