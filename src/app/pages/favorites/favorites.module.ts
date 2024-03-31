import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from 'src/app/pages/store/favorites.reducer';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatIconModule,
    StoreModule.forFeature('favorite', favoriteReducer)

  ]
})
export class FavoritesModule { }
