import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { ContactosComponent, CONTACTOS_COMPONENTES } from './componente.component';
import { CommonComponentModule } from '../common-component/common-component.module';



@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  exports: [
    ContactosComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule, CommonComponentModule,
  ],


})
export class ContactosModule {  }
