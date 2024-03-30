import { OnInit, Component, inject } from '@angular/core';
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { ICharacters } from 'src/app/core/models/ICharacters';
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
    ).subscribe((term: string) => {
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
