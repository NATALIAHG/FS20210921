import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { CATEGORIAS_COMPONENTES } from './componente.component';




@NgModule({
  declarations: [
    CATEGORIAS_COMPONENTES,
  ],
  exports: [
    CATEGORIAS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,   // commoncomponent module
  ],


})
export class CategoriasModule {  }
