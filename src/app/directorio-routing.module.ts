import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscadorComponent } from './buscador.component';
import { ArbolComponent } from './arbol.component';
import { DetalleComponent } from './detalle.component';

const directorioRoutes: Routes = [
  { path: 'search', component: BuscadorComponent },
  { path: 'arbol/:id', component: ArbolComponent },
  { path: 'nodo/:id', component: DetalleComponent },
  { path: 'inicio', component: ArbolComponent }, // Quizas deberiamos ir a otra pagina...
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      directorioRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DirectorioRoutingModule { }
