import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAddComponent, ActoresComponent, ActoresEditComponent, ActoresViewComponent } from './actores';
import { PageNotFoundComponent } from './main';
import { PeliculasAddComponent, PeliculasComponent, PeliculasEditComponent, PeliculasViewComponent } from './peliculas';

const routes: Routes = [

  { path: 'actores', children: [
    { path: '',  component: ActoresComponent },
    { path: 'add',  component: ActoresAddComponent },
    { path: ':id/edit',  component: ActoresEditComponent },
    { path: ':id',  component: ActoresViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
    { path: ':id/:kk',  component: ActoresViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},

  { path: 'peliculas', children: [
    { path: '',  component: PeliculasComponent },
    { path: 'add',  component: PeliculasAddComponent },
    { path: ':id/edit',  component: PeliculasEditComponent },
    { path: ':id',  component: PeliculasViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
    { path: ':id/:kk',  component: PeliculasViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
