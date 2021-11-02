import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';

import { ActoresDAOService, ActoresViewModelService } from './servicios.service';


export class DAOServiceMock<T, K>{
  constructor(private listado: Array<T>){

  }


}


describe('ActoresViewModelService', () => {
  let service: ActoresViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [ NotificationService, LoggerService,
        // { provide: ActoresDAOService, factory: () => () => new DAOServiceMock<ActoresComponent, number>
        // ()}
      ]  // providers cuando me pidas Actores Dao services, que devuelva la funcion, que devuelva la instancia que me hagas, entre () le meto los datos de ejemplo
    });
    service = TestBed.inject(ActoresViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
