import { TestBed } from '@angular/core/testing';

import { librosViewModelService } from './servicios.service';

describe('ServiciosService', () => {
  let service: librosViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(librosViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
