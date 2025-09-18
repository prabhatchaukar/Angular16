import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users=[
    {id: 1,name: 'Hitesh Sir',role:'Mentor'},
    {id: 2,name: 'Prabhat',role:'Develoer'},
    {id: 3,name: 'Sumit',role:'Develoer'},
  ];

  constructor() { }
  getUsers(){
    return this.users;
  }
}
