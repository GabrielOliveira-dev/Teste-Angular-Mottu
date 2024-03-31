import {  Component } from '@angular/core';
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { APIService } from 'src/app/core/services/apiservice.service';
import { Store } from '@ngrx/store';
import { IFavorites } from 'src/app/core/models/IFavorites';
import { add } from '../store/favorites.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  characters: any[] = [];
  private searchTerms = new Subject<string>();


  

  constructor(
    private apiService: APIService,
    private store: Store<IFavorites[]>,
    ) {}

  ngOnInit(): void {
    this.loadCharacters();


    this.searchTerms.pipe(
      debounceTime(300),
      switchMap((data) => this.apiService.searchCharacter(data)),
      catchError((err, caught) => {
        return typeof({})
      }),
      tap((data: any) => this.characters = data.results)
    ).subscribe()
  }

  loadCharacters() {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results

    })
  }

  searchChanged(term: string) {
    this.searchTerms.next(term);
  }


  addFavorite(product: IFavorites) {
    const favoriteProduct:IFavorites = {
      ...product,
      isFavorite: true
    }
    this.store.dispatch(add({product}));
  }
}













