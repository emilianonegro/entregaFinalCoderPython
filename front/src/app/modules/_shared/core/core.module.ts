import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RecipiesComponent } from './recipies/recipies.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    RecipiesComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    AppHeaderComponent,
    RecipiesComponent
  ]
})
export class CoreModule { }
