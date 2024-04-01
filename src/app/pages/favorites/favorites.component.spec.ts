import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IFavorites } from 'src/app/core/models/IFavorites';
import { decrement, remove } from '../store/favorites.actions';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponent ],
      imports: [ StoreModule.forRoot({}) ], // You may need to import the relevant NgRx modules
      providers: [ Store ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch remove and decrement actions when removeFavorite is called', () => {
    const mockProduct: IFavorites = { 
      id: 1, 
      name: 'Test Product',
      species: 'Test Species',
      image: 'test.jpg',
      type: 'Test Type',
      isFavorite: true
    };
    component.removeFavorite(mockProduct);
    expect(store.dispatch).toHaveBeenCalledWith(remove({ product: mockProduct }));
  });

  // You can add more test cases as needed
});
