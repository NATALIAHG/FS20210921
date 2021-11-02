import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';

import { IdiomasDAOService, IdiomasViewModelService } from './servicios.service';


export class DAOServiceMock<T, K>{
  constructor(private listado: Array<T>){

  }


}


describe('IdiomasViewModelService', () => {
  let service: IdiomasViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [ NotificationService, LoggerService,
        // { provide: IdiomasDAOService, factory: () => () => new DAOServiceMock<IdiomasComponent, number>
        // ()}
      ]  // providers cuando me pidas Idiomas Dao services, que devuelva la funcion, que devuelva la instancia que me hagas, entre () le meto los datos de ejemplo
    });
    service = TestBed.inject(IdiomasViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
