import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { UsersModel } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  public userArray: UsersModel;
  public id;

  constructor(
    private user: UsersService
  ) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.getUser();
    }, 1000);
  }

  getUser(){
    this.user.getUser(this.user.idUser).subscribe(res => {
      this.userArray = res;
    })
  }

}
