import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxCardsRoutingModule } from './ntx-cards-routing.module';
import { CardSimpleComponent } from './card-simple/card-simple.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxCardsRoutingModule
  ],
  declarations: [
    CardSimpleComponent
  ],
  exports: [
    CardSimpleComponent
  ]
})
export class NtxCardsModule { }
