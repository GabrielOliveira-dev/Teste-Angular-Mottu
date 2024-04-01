import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APIService } from './apiservice.service';
import { ICharacters } from 'src/app/core/models/ICharacters';

describe('APIService', () => {
  let service: APIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [APIService]
    });
    service = TestBed.inject(APIService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters', waitForAsync(inject([HttpTestingController, APIService],
    (httpClient: HttpTestingController, apiService: APIService) => {
      const mockResponse: { results: ICharacters[] } = {
        results: [{ id: 1, name: 'Rick', species: 'Human', image: 'rick.jpg', type: 'Scientist' }]
      };

      apiService.getCharacters().subscribe((characters: ICharacters[]) => {
        expect(characters).toEqual(mockResponse.results);
      });

      const req = httpMock.expectOne('https://rickandmortyapi.com/api/character');
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    })
  ));

  it('should search for characters by name', waitForAsync(inject([HttpTestingController, APIService],
    (httpClient: HttpTestingController, apiService: APIService) => {
      const searchTerm = 'test';
      const mockResponse: ICharacters[] = [{ id: 1, name: 'Rick', species: 'Human', image: 'rick.jpg', type: 'Scientist' }];

      apiService.searchCharacter(searchTerm).subscribe((characters: ICharacters[]) => {
        expect(characters).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    })
  ));
});
