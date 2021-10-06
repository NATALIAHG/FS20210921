import { templateJitUrl } from '@angular/compiler';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  private nombre: string = 'mundo';
  public listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'malaga'},
    {id: 3, nombre: 'SEVILLA'},
    {id: 4, nombre: 'ciudad real'},
  ]
  idProvincia = 2;

  resultado: string | null = null; //para ver resultado por pantalla, puede ser string o noulo y no haber nada.
  visible = true;
  estetica = { importante : true, error: false, urgente: true }; //objeto jvs
  fontSize = 14;

  constructor(public vm: NotificationService) { }

  public get Nombre(): string { return this.nombre; }
  public set Nombre(value: string){
    if(this.nombre === value) return;
    this.nombre = value;
  }

  public saluda(): void{
    this.resultado = `Hola ${this.nombre}`;
  }

  public despide(): void{
    this.resultado = `Adios ${this.nombre}`;
  }

  public di(algo: string):void{
    this.resultado = `Dice ${algo}`;
  }

  public cambia(): void{
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  public calcula(a: number, b: number): number{ return a + b;} // los calculos devuelve el valor y no es void

  public add( provincia: string): void{
    const id = this.listado.length === 0 ? 1 : this.listado[this.listado.length - 1].id + 1 // el listado se ha iniciado a 0? empieza, (true 1), sino, listado + 1 de la longitud -1
   // this.resultado?.toLowerCase().trim()  // si el resultado es nulo error, si no lo pasa a minuscula.
   this.listado.push( { id,nombre:provincia} );
   this.idProvincia = id;
  }

  ngOnInit(): void {
  }

}
