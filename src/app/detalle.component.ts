import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DirectorioService } from './directorio.service';
import { Gmaps } from 'google-maps';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  @Output() nodo;
  //Id del nodo seleccionado

  private nodeId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DirectorioService
  ) { }

  ngOnInit() {
    console.log("--> ArbolComponent.ngOnInit");
    console.log(this.route.paramMap);
    console.log(this.route.snapshot.paramMap);
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    //Leemos el nodo ráiz
    this.service.leerNodo(id).then(response => {
      this.nodo = response;
      console.log(this.nodo);
    });

    // Pintamos el Googlemaps y ya lo haremos
    //Gmaps.KEY = 'AIzaSyDQBMjz4qeaDGZ8E8ZBW_p5SWk5a-hNit';
    //Gmaps.LIBRARUES = ['geometry', 'places'];
  }

}
