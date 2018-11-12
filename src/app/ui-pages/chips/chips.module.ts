import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ChipsRoutingModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class ChipsModule { }
