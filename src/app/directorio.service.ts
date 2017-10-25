import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DirectorioService {
  private _dataIdUrl = 'http://localhost:8080/directoriows/index.php/Directorio/data/id/';
  private _searchUrl = 'http://localhost:8080/directoriows/index.php/Directorio/search';

  //constructor(private _http : Http) {
  constructor(private _http : Http) {
    console.log("--> DirectorioService.constructor");
    console.log("<-- DirectorioService.constructor");
  }

  getData(): void {
    console.log("--> DirectorioService.getData");
    //return this._http.get("http://localhost/directoriows/index.php/Directorio/data/id/0/").map((res:Response) => res.json());
    //return this._http.get("http://localhost/directoriows/index.php/Directorio/data/id/0/");
    console.log("<-- DirectorioService.getData");

  //
  }
/*
  leerDatos(): Observable<Response> {
    // Se declara cómo va a ser la llamada
    // ocultando los pormenores a los consumidores
    return this.http.get("http://localhost/directoriows/index.php/Directorio/data/id/0/");
    // En este momento aún no se efectuó la llamada
  }
  */

  leerDatos(): Observable<String> {
    return this._http.get(this._dataIdUrl).map((response: Response) =>  response.json());
  }

  leerNodo(id: number): Promise<String> {
    console.log("--> DirectorioService.leerNodo");
    const url = `${this._dataIdUrl}/${id}`;
    console.log("--l DirectorioService.leerNodo url "+url);
    return this._http.get(url).toPromise().then(response => {
      return (response.json());
    }).catch(this.handleError);;
    /*
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      console.log("--- DirectorioService.leerNodo");

    })*/
  }

  search(nombre:String, apellido1:String, apellido2:String) {
    console.log("--> DirectorioService.search");
    var url = `${this._searchUrl}/`;
    if (nombre!='') {
      url+=`nombre/${nombre}/`;
    }
    if (apellido1!='') {
      url+=`apellido1/${apellido1}/`;
    }
    if (apellido2!='') {
      url+=`apellido2/${apellido2}/`;
    }
    console.log("--l DirectorioService.search url "+url);
    return this._http.get(url).toPromise().then(response => {
      console.log(response.json());
      return (response.json());
    }).catch(this.handleError);;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
