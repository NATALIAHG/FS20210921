import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAddComponent, ActoresComponent, ActoresEditComponent, ActoresViewComponent } from './actores';
import { CategoriasAddComponent, CategoriasComponent, CategoriasEditComponent, CategoriasViewComponent } from './categorias';
import { IdiomasComponent, IdiomasAddComponent, IdiomasEditComponent, IdiomasViewComponent } from './idiomas';
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

  { path: 'categorias', children: [
    { path: '',  component: CategoriasComponent },
    { path: 'add',  component: CategoriasAddComponent },
    { path: ':id/edit',  component: CategoriasEditComponent },
    { path: ':id',  component: CategoriasViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
    { path: ':id/:kk',  component: CategoriasViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},

  // { path: 'idiomas', children: [
  //   { path: '',  component: IdiomasComponent },
  //   { path: 'add',  component: IdiomasAddComponent },
  //   { path: ':id/edit',  component: IdiomasEditComponent },
  //   { path: ':id',  component: IdiomasViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  //   { path: ':id/:kk',  component: IdiomasViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  // ]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
