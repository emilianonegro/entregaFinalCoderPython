import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public isRecipie: boolean = false;
  public cancelRec: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public addRecipie() {
    this.isRecipie = !this.isRecipie;
  }

  public lala() {
    console.log('lala');
    this.isRecipie = false;
  }

}
