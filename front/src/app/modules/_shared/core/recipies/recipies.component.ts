import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  public isAdmin: boolean = false;

  constructor(
    private _router: Router
  ) { 
    const actualUrl = this._router.url;
    this.isAdmin = actualUrl.includes('dashboard')? true : false;
  }

  ngOnInit(): void {
  }

  public deleteRecipie() {
    // TODO: code to delete the recipie by ID
  }

  public editRecipie() {
    // TODO: code to edit the recipie by ID
  }

}
