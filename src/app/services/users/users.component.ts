import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any[] = [];
  constructor(private userServices: UserService){

  }
  ngOnInit(){
    this.users = this.userServices.getUsers()
  }
}
