import { Component, OnInit, Input, Output } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { DirectorioService } from './directorio.service';

@Component({
  selector: 'directorio-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() nodes;

  @Input() nombre;

  constructor(
    private service:DirectorioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log("submit");
    console.log(form);
    console.log(this.nombre);
    this.service.search(form.nombre, form.apellido1, form.apellido2).then(response => {
      this.nodes=response;
    });
  }

  search(): void {
    console.log("search");
    //this.nodes=
  }

}
