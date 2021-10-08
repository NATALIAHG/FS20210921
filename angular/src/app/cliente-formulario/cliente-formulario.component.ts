import { Component, Injectable, OnInit } from '@angular/core';
import { NotificationService } from '../common-services';


export interface Cliente{
  customer_id: number | null;
  store_id: number | null;
  first_name: string;
  last_name: string;
  email: string | null;
  address_id: string | null;
  active: boolean | null;
  create_date: Date | null;
  last_update: Date | null;
}

@Injectable({ providedIn: 'root' })
export class ClienteViewModel{
  listado: Array<Cliente> = [
    {
      customer_id: null,
      store_id: null,
      first_name: '',
      last_name: '',
      email: null,
      address_id: 'null',
      active: null,
      create_date: null,
      last_update: null,
    },
  ];
  Elemento: Cliente = {
    customer_id: null,
    store_id: null,
    first_name: '',
    last_name: '',
    email: null,
    address_id: 'null',
    active: null,
    create_date: null,
    last_update: null,
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
      customer_id: null,
      store_id: null,
      first_name: '',
      last_name: '',
      email: null,
      address_id: 'null',
      active: null,
      create_date: null,
      last_update: null,
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
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})


export class ClienteFormularioComponent implements OnInit {
  constructor(public vm: ClienteViewModel) { }

  ngOnInit(): void {
  }

}
