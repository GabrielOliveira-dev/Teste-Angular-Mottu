import { OnInit, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacters } from 'src/app/core/models/ICharacters';
import { APIService } from 'src/app/core/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

/*   api: Observable<ICharacters[]>;
 */

characters: any[] = [];

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results
      console.log(this.characters)
    })
  }








}
