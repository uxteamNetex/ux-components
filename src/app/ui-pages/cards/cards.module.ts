import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import {
  NtxButtonsModule,
  NtxCardsModule
} from '@netex/ux-components';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsDocComponent } from './documentation/cards-doc.component';
import { CardsExamplesComponent } from './examples/cards-examples.component';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    CardsRoutingModule
  ],
  declarations: [
    CardsDocComponent,
    CardsExamplesComponent
  ]
})
export class CardsModule { }
