import {  Component } from '@angular/core';
import { Subject, catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { APIService } from 'src/app/core/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  characters: any[] = [];
  charactersBackup: any[] = [];
  private searchTerms = new Subject<string>();


  

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.loadCharacters();


    this.searchTerms.pipe(
      debounceTime(300),
      switchMap((data) => this.apiService.searchCharacter(data)),
      
      tap((data: any) => this.characters = data.results)
    ).subscribe((term: any) => {
      this.searchCharacters(term);
    })
  }

  loadCharacters() {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results
      this.charactersBackup = this.characters
    })
  }

  searchChanged(term: string) {
    this.searchTerms.next(term);
  }

  searchCharacters(term: string){
    if(!term.trim()) {
      this.characters = this.charactersBackup;
    }

    this.characters = this.characters.filter(character =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  addFavorite(term: number) {
    console.log("Button Pressed", term)
  }












}
