import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { APIService } from 'src/app/core/services/apiservice.service';
import { StoreModule, Store } from '@ngrx/store';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IFavorites } from 'src/app/core/models/IFavorites';
import { add, increment } from '../store/favorites.actions';
import { HttpClientModule } from '@angular/common/http';
import { favoriteReducer } from '../store/favorites.reducer';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: APIService;
  let store: Store<IFavorites[]>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        APIService,
        FormBuilder
      ],
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({favorite:favoriteReducer}) // Importe o rootReducer ou o reducer necessário
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(APIService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch add and increment actions when addFavorite is called', () => {
    const mockProduct: IFavorites = { id: 1, name: 'Product 1', isFavorite: false, species: '', image: '', type: '' };
    spyOn(store, 'dispatch');

    component.addFavorite(mockProduct);

    expect(store.dispatch).toHaveBeenCalledWith(add({ product: { ...mockProduct, isFavorite: true } }));
    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });
});
