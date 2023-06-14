import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-recipies',
  templateUrl: './show-recipies.component.html',
  styleUrls: ['./show-recipies.component.css']
})
export class ShowRecipiesComponent implements OnInit {
  public isRecipe: boolean = true;
  public isFavorite:boolean = false;

  constructor(
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public onFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this._toastr.success('Favorita 🧡');
    } else {
      this._toastr.error('No mas favorita 💔');
    }

  }

}
