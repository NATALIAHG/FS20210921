import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  resultado:boolean = false;
  acumulado:number = 0;
  opera: string = '+';
  pantalla: string = '0';


  constructor() {}

  ponerdigito(num: string): void {
    if (this.pantalla == '0' || this.resultado) {
      this.pantalla = num;
      this.resultado = false;
    } else {
      this.pantalla += num;
    }
  }

  calcular(nuevaOperacion: string): void {
    let valor = parseFloat(this.pantalla);
    //let resultado = parseFloat(this.resultado);
    switch (this.opera) {
      case '+':
        this.acumulado += valor;
        break;
      case '-':
        this.acumulado -= valor;
        break;
      case '*':
        this.acumulado *= valor;
        break;
      case '/':
        this.acumulado /= valor;
        break;
      //  default:resultado =valor;
    }
    this.opera = nuevaOperacion;
    this.resultado = true;
    this.pantalla = this.acumulado.toString();
  }

  limpiarPantalla(): void {
    this.pantalla = '0';
  }

  limpiarTodo(): void {
    this.pantalla = '0';
    this.resultado = false;
    this.opera = '+';
  }

  borrar(): void {
    if (this.pantalla.length > 1 && this.pantalla != '0') {
      this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
    } else {
      this.pantalla = '0';
    }
  }

  ngOnInit(): void {}
}
