import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './actores';

const routes: Routes = [
  { path: '',  component: ActoresComponent },
  { path: 'actores', children: [
    { path: '',  component: ActoresComponent },
 //   { path: 'add',  component: ContactosAddComponent },
  //  { path: ':id/edit',  component: ContactosEditComponent },
  //  { path: ':id',  component: ContactosViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
 //   { path: ':id/:kk',  component: ContactosViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
