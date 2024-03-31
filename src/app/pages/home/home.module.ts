import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { APIService } from 'src/app/core/services/apiservice.service';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from 'src/app/pages/store/favorites.reducer';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    StoreModule.forFeature('favorite', favoriteReducer)
  ],
  providers: [ APIService ]
  
})
export class HomeModule { }
