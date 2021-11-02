import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { HttpClientModule } from '@angular/common/http';
import { CommonServicesModule } from './common-services';
import { SecurityModule } from './security';
import { LoggerService, MyCoreModule } from 'src/lib/my-core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActoresModule } from './actores';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MainModule, HttpClientModule, CommonServicesModule,SecurityModule,
    MyCoreModule, FormsModule, CommonModule, ActoresModule,
  ],
  providers: [
    LoggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
