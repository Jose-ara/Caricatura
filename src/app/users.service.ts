import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private error = new Subject<string>();
  private terminoBusqueda = new Subject<string>();
  public idUser;

  constructor(
    private http: HttpClient
  ) { }

  setError(mensaje: string){
    this.error.next(mensaje);
  }

  enviarTerminoBusqueda(termino: string){
    this.terminoBusqueda.next(termino);
  }

  recibirTerminoBusqueda(): Observable<string>{
    return this.terminoBusqueda.asObservable();
  }

  getUsers( termino: string, pagActual: number, id: number): Observable<any>{
    const URL = 'https://rickandmortyapi.com/api/character?page='+ pagActual + '&name=' + termino + '&=' + id;
    return this.http.get(URL);
  }

  getUser( id: number): Observable<any>{
    const URL = 'https://rickandmortyapi.com/api/character/' + id;
    return this.http.get(URL);
  }
}
