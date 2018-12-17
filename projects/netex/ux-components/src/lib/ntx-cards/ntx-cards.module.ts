import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NtxCardsRoutingModule } from './ntx-cards-routing.module';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { Card4Component } from './card4/card4.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { Card9Component } from './card9/card9.component';

import { NtxMenusModule } from '../ntx-menus/ntx-menus.module';
import { NtxFormsModule } from '../ntx-forms/ntx-forms.module';
import { NtxButtonsModule } from '../ntx-buttons/ntx-buttons.module';
import { NtxListsModule } from '../ntx-lists/ntx-lists.module';
import { Card1Component } from './card1/card1.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxMenusModule,
    NtxFormsModule,
    NtxButtonsModule,
    NtxListsModule,
    NtxCardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CardSimpleComponent,
    Card1Component,
    Card4Component,
    Card7Component,
    Card8Component,
    Card9Component
  ],
  exports: [
    CardSimpleComponent,
    Card1Component,
    Card4Component,
    Card7Component,
    Card8Component,
    Card9Component
  ]
})
export class NtxCardsModule { }
