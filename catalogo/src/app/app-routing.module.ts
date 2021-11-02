import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAddComponent, ActoresComponent, ActoresEditComponent, ActoresViewComponent } from './actores';

const routes: Routes = [
  { path: '',  component: ActoresComponent },
  { path: 'actores', children: [
    { path: '',  component: ActoresComponent },
    { path: 'add',  component: ActoresAddComponent },
    { path: ':id/edit',  component: ActoresEditComponent },
    { path: ':id',  component: ActoresViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
   { path: ':id/:kk',  component: ActoresViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
