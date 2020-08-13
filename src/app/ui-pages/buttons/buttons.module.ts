import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsDocComponent } from './documentation/buttons-doc.component';
import { ButtonsExamplesComponent } from './examples/buttons-examples.component';
import { SharedModule } from '../../shared/shared.module';
import { MatExpansionModule } from '@angular/material';

import {
  NtxButtonsModule,
  NtxCardsModule
} from '@netex/ux-components';

@NgModule({
  imports: [
    CommonModule,
    NtxButtonsModule,
    NtxCardsModule,
    ButtonsRoutingModule,
    MatExpansionModule
  ],
  declarations: [
      ButtonsExamplesComponent,
      ButtonsDocComponent
    ]
})
export class ButtonsModule { }
