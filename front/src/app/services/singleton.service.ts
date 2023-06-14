import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class SingletonService {
  
  constructor() {}

  get loggedIn() {return this.loggedUser != null }

  get loggedUser() { 
    let user = (localStorage.getItem('user') as string)
    return JSON.parse(user); }
  set loggedUser(value: any) {
    if (value !== null)
      localStorage.setItem('user', JSON.stringify(value));
    else
      localStorage.removeItem('user');
  }
}