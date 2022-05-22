import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nombreUsuario = '';

  constructor(
    private usuarios: UsersService
  ) { }

  ngOnInit(): void {
  }

  enviarTerminoBusqueda(){
    if(this.nombreUsuario === ''){
      this.usuarios.setError('Agrega un texto de busqueda');
    }
    
    this.usuarios.enviarTerminoBusqueda(this.nombreUsuario);
  }

}
