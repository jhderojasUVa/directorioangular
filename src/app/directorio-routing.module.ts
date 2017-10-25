import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscadorComponent } from './buscador.component';
import { ArbolComponent } from './arbol.component';
import { DetalleComponent } from './detalle.component';

const directorioRoutes: Routes = [
  { path: 'search', component: BuscadorComponent },
  { path: 'arbol/:id',      component: ArbolComponent },
  { path: 'nodo/:id',      component: DetalleComponent },
  {
    path: 'inicio',
    component: ArbolComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    //RouterModule.forChild(directorioRoutes)
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
