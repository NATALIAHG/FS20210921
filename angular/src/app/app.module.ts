import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component'
import { LoggerService, MyCoreModule } from 'src/lib/my-core';
import { MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { SecurityModule } from './security';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { CommonComponentModule } from './common-component/common-component.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactosModule } from './contactos';
import { librosModule } from './libros';




@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClienteFormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonComponentModule,
    SecurityModule, CommonServicesModule, MainModule, ContactosModule, librosModule
  ],
  providers: [
    LoggerService,
    // { provide: LoggerService, useClass: LoggerHTTPService },
    // { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    // { provide: LOCALE_ID, useValue: 'es-ES'},
    // { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
