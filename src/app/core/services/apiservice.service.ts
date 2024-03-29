import { ICharacters } from './../models/ICharacters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly API = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }
/* getCharacters(): Observable<ICharacters[]> */
  getCharacters(): any {
    return this.httpClient.get(this.API)
      .pipe(
        tap(data => console.log(data))
      )
  }
}
