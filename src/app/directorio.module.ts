import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar objetos de la librería http
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { DirectorioRoutingModule } from './directorio-routing.module';

import { DirectorioComponent } from './directorio.component';
import { DirectorioService } from './directorio.service';
import { BuscadorComponent } from './buscador.component';
import { ArbolComponent } from './arbol.component';
import { DetalleComponent } from './detalle.component';

@NgModule({
  declarations: [
    DirectorioComponent,
    BuscadorComponent,
    ArbolComponent,
    DetalleComponent,
  ],
  imports: [
    DirectorioRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
  ],
  providers: [
    DirectorioService,
  ],
  bootstrap: [DirectorioComponent]
})
export class DirectorioModule { }
