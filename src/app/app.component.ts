import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'teste-angular-mottu';


    public countFavorites$!:  Observable<any>;
  
    constructor(
      private store: Store<any>
    )  {}
  
    ngOnInit() {
      this.countFavorites$ = this.store.select('favorite');
    }
  
}
