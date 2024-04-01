import { ICharacters } from 'src/app/core/models/ICharacters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly API = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<ICharacters[]> {
    return this.httpClient.get<{ results: ICharacters[] }>(this.API).pipe(
      map(response => response.results)
    )
  }

  searchCharacter(term: string): Observable<ICharacters[]> {
    return this.httpClient.get<ICharacters[]>(`${this.API}/?name=${term}`)
  }
}
