import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { blogAddComponent, blogComponent, blogEditComponent, blogListComponent, blogViewComponent } from './blog/componente.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { librosAddComponent, librosEditComponent, librosListComponent, librosViewComponent } from './libros/componente.component';
import { HomeComponent, PageNotFoundComponent } from './main';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },  // ruta vacia, full comparacion completa, me abras el componente home component , ES LO QUE HAY EN EL MENU
  { path: 'inicio',  component: HomeComponent },
  { path: 'demos',  component: DemosComponent },
  { path: 'calculadora',  component: CalculadoraComponent },

  // { path: 'blog',  component: blogComponent },

  { path: 'blog',  children: [
    { path: '', component: blogListComponent },
    { path: 'add', component: blogAddComponent},
    { path: ':id/edit', component: blogEditComponent},
    { path: ':id',  component: blogViewComponent },
    { path: ':id/:kk',  component: blogViewComponent },
  ]},


  { path: 'contactos', children: [
    { path: '',  component: ContactosListComponent },
    { path: 'add',  component: ContactosAddComponent },
    { path: ':id/edit',  component: ContactosEditComponent },
    { path: ':id',  component: ContactosViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
    { path: ':id/:kk',  component: ContactosViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},
  //METER LIBROS
  { path: 'libros', children: [
    { path: '',  component: librosListComponent },
    { path: 'add',  component: librosAddComponent },
    { path: ':id/edit',  component: librosEditComponent },
    { path: ':id',  component: librosViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
    { path: ':id/:kk',  component: librosViewComponent }, // aqui el seo se podria mas datos de ruta s que quiere
  ]},


  { path: 'antonie/hasted', redirectTo: '/contactos/27' },  // para redirigir al reves.
  { path: '404.html', component: PageNotFoundComponent},  //para cuando falle
  { path: '**', component: PageNotFoundComponent}  //para cuando falle

//MEJOR CON CHILDREN
  // { path: 'formulario',  component: FormularioComponent },
  // { path: 'clienteFormulario',  component: ClienteFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
