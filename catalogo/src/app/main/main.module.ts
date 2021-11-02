import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SecurityModule } from '../security';
import { CommonServicesModule } from '../common-services';



@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  exports: [
    HomeComponent, NotificationComponent, PageNotFoundComponent, HeaderComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild([]),
    SecurityModule, CommonServicesModule,

  ]
})
export class MainModule { /* PARA QUE SOLO SE CARGUE UNA VEZ EL MAIN EN LA PAGINA, poner parentesis al final*/
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
