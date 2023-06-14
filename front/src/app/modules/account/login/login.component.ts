import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingletonService } from 'src/app/services/singleton.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _singleton: SingletonService) { 
  }

  ngOnInit(): void {
    this._singleton.loggedUser = false;
  }

  public logIn() {
    this._router.navigate(['home']);
    this._singleton.loggedUser = true;
  }

}
