import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/users.service';
import { UsersModel } from '../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public termino = '';
  public userArray: UsersModel[];
  public userArrayDetail: UsersModel[];
  public suscripcion: Subscription;
  public cantidad;
  public pagActual = 1;
  public totalPag = 0;
  public userXpag: number;
  public id;

  constructor(
    private users: UsersService,
  ) {
    this.suscripcion = this.users.recibirTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.obtenerUsuarios();
      })
   }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.users.getUsers(this.termino, this.pagActual, this.id ).subscribe( res => {
      this.userArray = res.results;
      console.log(res);
      this.totalPag = res.info.pages;
      this.userXpag = this.userArray.length;
      this.id = res.results.id;
    })
  }

  detalleUser(id: number){
    this.users.getUser(id).subscribe(res => {
      this.users.idUser = id;
    })
  }


  paginaAnterior(){
    this.pagActual--;
    this.cantidad = [];
    this.obtenerUsuarios();
  }

  paginaSiguiente(){
    this.pagActual++;
    this.cantidad = [];
    this.obtenerUsuarios();
  }

  
  paginaAnteriorClass(){
    if(this.pagActual == 1){
      return false;
    }else{
      return true;
    }
  }

  paginaSiguienteClass(){
    if(this.pagActual == this.totalPag){
      return false;
    }else{
      return true;
    }
  }

}
