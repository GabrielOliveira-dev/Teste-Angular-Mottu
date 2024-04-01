import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFavorites } from 'src/app/core/models/IFavorites';
import { decrement, remove } from '../store/favorites.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favorites$!:  Observable<any>;

  constructor(
    private store: Store<any>
  )  {}

  ngOnInit() {
    this.favorites$ = this.store.select('favorite');
  }

  removeFavorite(product: IFavorites) {
    this.store.dispatch(remove({product}));
    this.decrement()
  }

decrement() {
  this.store.dispatch(decrement());
}
}
