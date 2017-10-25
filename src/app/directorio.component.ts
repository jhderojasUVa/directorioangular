import { Component, OnInit, Input, Output } from '@angular/core';

// Importar la clase Observable desde la librería rxjs
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { DirectorioService } from './directorio.service';

@Component({
  selector: 'directorio-root',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit  {
  title = 'DirectorioComponent';
  profile = {};

  //constructor( private service: DirectorioService) { }
  constructor(private service: DirectorioService) {
    console.log("--> DirectorioComponent.constructor");
  }

  ngOnInit() {
    console.log("--> DirectorioComponent.ngOnInit");
    //Solicitamos el nodo 0
    //this.service.getData().subscribe(data => this.profile = data);
    //this.service.getData();


    /*
    this.datosService
      .leerDatos()
      .subscribe(res => {
        this.datos = res.json();
      });
      */
  }

  /*
  leerDatos(): Observable<Response> {
    // Se declara cómo va a ser la llamada
    // ocultando los pormenores a los consumidores
    return this.http.get("http://localhost/directoriows/index.php/Directorio/data/id/0/");
    // En este momento aún no se efectuó la llamada
  }
  */

}
