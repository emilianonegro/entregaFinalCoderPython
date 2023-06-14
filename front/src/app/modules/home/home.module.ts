import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowRecipiesComponent } from './show-recipies/show-recipies.component';
import { ShowFavoritesComponent } from './show-favorites/show-favorites.component';
import { CoreModule } from '../_shared/core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    ShowRecipiesComponent,
    ShowFavoritesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
