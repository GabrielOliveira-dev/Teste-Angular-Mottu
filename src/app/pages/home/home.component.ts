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

characters$!: [];

  constructor(private apiService: APIService) {
    this.apiService.getCharacters().subscribe((res: any) => this.characters$ = res);
    
  }

  ngOnInit(): void {

  }








}
