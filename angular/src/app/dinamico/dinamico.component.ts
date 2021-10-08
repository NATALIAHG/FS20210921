import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({

  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']

})

export class DinamicoComponent implements OnInit {

  menu = [

    { texto: 'formulario cliente', icono: 'fas fa-usesr.tie', componente: ClienteFormularioComponent },
    { texto: 'formulario', icono: 'fas fa-usesr.tie', componente: FormularioComponent },
    { texto: 'Calculadora', icono: '', componente: CalculadoraComponent },
    { texto: 'Inicio', icono: 'fas fa-home', componente: HomeComponent },
    { texto: 'demos', icono: '', componente: DemosComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
