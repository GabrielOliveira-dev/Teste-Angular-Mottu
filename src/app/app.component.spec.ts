import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // Importe o MatButtonToggleModule
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing'; // Importe o RouterTestingModule


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        StoreModule.forRoot({}),
        MatButtonToggleModule, // Adicione o MatButtonToggleModule aqui
        MatIconModule,
        RouterTestingModule 
      ],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize countFavorites$ with store select', () => {
    // Configurando o espião para retornar um observable
    spyOn(store, 'select').and.returnValue(of(5));

    // Inicializando o componente
    fixture.detectChanges();

    // Verificando se countFavorites$ foi inicializado corretamente com um observable
    expect(component.countFavorites$).toBeInstanceOf(Observable);
  });
});
