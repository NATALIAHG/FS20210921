import { Component, Injectable, OnInit } from '@angular/core';
import { NotificationService } from '../common-services';

// lo usa para validar que estos son los datos que tiene que tener, mas rapido y mas aun con any,
export interface Persona {
  /* para validar que tiene los datos correctos vale con la interface.*/
  id: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  edad: number | null;
  dni: string | null;
}

@Injectable({ providedIn: 'root' }) // para que el servicio sea global
export class PersonasViewModel {
  /* listado para mantenimiento*/
  listado: Array<Persona> = [
    {
      id: 1,
      nombre: 'maria',
      apellidos: 'sanchez',
      correo: 'maria@hotmail.com',
      edad: 30,
      dni: '12345678Z',
    },
  ];
  Elemento: Persona = {
    id: null,
    nombre: '',
    apellidos: '',
    correo: 'null',
    edad: null,
    dni: 'null',
  };
  IsAdd = true; // para comprobar si esta añadiendo

  constructor(private notify: NotificationService) {
    // le inyecto el servicio notificaciones
    this.add();
  }

  public list() {
    // se puede desdoblar en pagina cion listar..etc
  }

  public add() {
    //no se va al servidor, se va al elemento y le mete uno
    this.Elemento = {
      id: null,
      nombre: '',
      apellidos: '',
      correo: 'null',
      edad: null,
      dni: 'null',
    };
    this.IsAdd = true;
  }

  public edit() {
    // si quieren editarlo, vamos al servidor, me trae los datos y cogo el primero 0, simulo y me los he traido del servidor
    this.Elemento = this.listado[0];
    this.IsAdd = false;
  }

  public delete() {}

  public cancel() {}

  public send() {
    // notifico y simulo que envio al servidor como nuevos o modificados con un json, para ver que se enviaria
    this.notify.add(
      (this.IsAdd ? 'Nuevos' : 'Modificados') + JSON.stringify(this.Elemento)
    );
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  constructor(public vm: PersonasViewModel) {} /* */

  ngOnInit(): void {}
}
