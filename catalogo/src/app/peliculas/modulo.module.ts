import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { PELICULAS_COMPONENTES } from './componente.component';




@NgModule({
  declarations: [
    PELICULAS_COMPONENTES,
  ],
  exports: [
    PELICULAS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,   // commoncomponent module
  ],


})
export class PeliculasModule {  }
