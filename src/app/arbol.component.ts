import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import { DirectorioService } from './directorio.service';

@Component({
  selector: 'directorio-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DirectorioService
  ) { }

  //Almacenamiento del arbol
  @Output() arbol ;



  //Id del arbol seleccionado
  private nodeId: number;

  ngOnInit() {
    // Inicio del componente
    //console.log("--> ArbolComponent.ngOnInit");
    //console.log(this.route.paramMap);
    //console.log(this.route.snapshot.paramMap);
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(id);

    //Leemos el nodo ráiz
    this.service.leerNodo(id).then(response => {
      this.arbol=response;
    });

    this.router.events.subscribe((val) => {
        // see also
        var self=this;
        //console.log("CAMBIO EN LA RUTA");
        //console.log(val instanceof NavigationEnd);
        if (val instanceof NavigationEnd) {
          //console.log(this.route.snapshot.paramMap.get('id'));
          this.nodeId = +this.route.snapshot.paramMap.get('id');
          //console.log(this.nodeId);
          this.service.leerNodo(this.nodeId).then(response => {
            self.arbol=response;
            //console.log(self.arbol);
          });

        }
    });
  }

  gotoNode(nodo) {
    // Ir al nodo
    //console.log("--> gotoNode ");
    //console.log(nodo);
    //console.log(nodo.id);
  }
}
