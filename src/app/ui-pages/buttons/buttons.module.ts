import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsDocComponent } from './documentation/buttons-doc.component';
import { ButtonsExamplesComponent } from './examples/buttons-examples.component';
import { MatExpansionModule, MatSlideToggleModule } from '@angular/material';

import {
  NtxButtonsModule,
  NtxCardsModule
} from '@netex/ux-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NtxButtonsModule,
    NtxCardsModule,
    ButtonsRoutingModule,
    MatExpansionModule,
    MatSlideToggleModule,
    FormsModule
  ],
  declarations: [
      ButtonsExamplesComponent,
      ButtonsDocComponent
    ]
})
export class ButtonsModule { }
