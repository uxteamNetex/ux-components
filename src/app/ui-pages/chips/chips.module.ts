import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

import {
  NtxChipsModule,
  NtxCardsModule
} from '@netex/ux-components';

import { ChipsRoutingModule } from './chips-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    NtxChipsModule,
    NtxCardsModule,
    ChipsRoutingModule,
    MatExpansionModule,
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class ChipsModule { }
