import { ICharacters } from 'src/app/core/models/ICharacters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly API = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<ICharacters[]> {
    return this.httpClient.get<ICharacters[]>(this.API);
  }

  searchCharacter(term: string): Observable<ICharacters[]> {
    return this.httpClient.get<ICharacters[]>(`${this.API}/?name=${term}`)
  }
}
