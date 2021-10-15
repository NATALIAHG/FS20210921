import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';

import { ContactosDAOService, ContactosViewModelService } from './servicios.service';


export class DAOServiceMock<T, K>{
  constructor(private listado: Array<T>){

  }


}


describe('ContactosViewModelService', () => {
  let service: ContactosViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [ NotificationService, LoggerService,
        // { provide: ContactosDAOService, factory: () => () => new DAOServiceMock<ContactosComponent, number>
        // ()}
      ]  // providers cuando me pidas contactos Dao services, que devuelva la funcion, que devuelva la instancia que me hagas, entre () le meto los datos de ejemplo
    });
    service = TestBed.inject(ContactosViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
