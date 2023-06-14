import { Component } from '@angular/core';
import { SingletonService } from './services/singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'front';

  constructor(
    private singleton: SingletonService
  ) {
    localStorage.removeItem('user');
  }

  get showHeader() { return this.singleton.loggedIn; }
}
