import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { APIService } from 'src/app/core/services/apiservice.service';
import { StoreModule } from '@ngrx/store';
import { _counterReducer, favoriteReducer } from 'src/app/pages/store/favorites.reducer';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    StoreModule.forFeature('favorite', favoriteReducer),
    StoreModule.forFeature('contador', _counterReducer)
  ],
  providers: [ APIService ]
  
})
export class HomeModule { }
