import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { blogComponent, blog_COMPONENTES,  } from './componente.component';
import { CommonComponentModule } from '../common-component/common-component.module';



@NgModule({
  declarations: [
    blog_COMPONENTES,
  ],
  exports: [
    blogComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule, CommonComponentModule,
  ],


})
export class BlogModule {  }
