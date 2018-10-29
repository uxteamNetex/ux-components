import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CardsPageRoutingModule } from './cards-page-routing.module';
import { CardsPageComponent } from './cards-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardsPageRoutingModule
  ],
  declarations: [CardsPageComponent]
})
export class CardsPageModule { }
