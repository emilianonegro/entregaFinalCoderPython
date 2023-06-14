import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class CoreModule { }
