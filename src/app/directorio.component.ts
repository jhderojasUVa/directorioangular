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
  }

}
