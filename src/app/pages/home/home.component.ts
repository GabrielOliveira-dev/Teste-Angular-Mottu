import { Component } from '@angular/core';
import { Subject, catchError, debounceTime, of, switchMap } from 'rxjs';
import { APIService } from 'src/app/core/services/apiservice.service';
import { Store } from '@ngrx/store';
import { IFavorites } from 'src/app/core/models/IFavorites';
import { add, increment } from '../store/favorites.actions';


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
      switchMap((term: any) => {
        if (!term.trim()) {
          return this.apiService.searchCharacter(term);
        }
        return this.apiService.searchCharacter(term).pipe(
          catchError(error => {
            console.error('Personagem não encontradao:', error);
            // Limpa o erro e retorna um observable vazio para reiniciar o fluxo
            return of([]);
          })
          

        );
      })
    ).subscribe((data: any) => this.characters = data.results)
  }

  loadCharacters() {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data

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
    this.increment()
  }

increment() {
  this.store.dispatch(increment());
}
}