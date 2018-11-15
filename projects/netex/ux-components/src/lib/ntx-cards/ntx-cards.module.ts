import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxCardsRoutingModule } from './ntx-cards-routing.module';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { Card4Component } from './card4/card4.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxMenusModule,
    NtxFormsModule,
    NtxCardsRoutingModule
  ],
  declarations: [
    CardSimpleComponent,
    Card4Component,
    Card7Component,
    Card8Component
  ],
  exports: [
    CardSimpleComponent,
    Card4Component,
    Card7Component,
    Card8Component
  ]
})
export class NtxCardsModule { }
