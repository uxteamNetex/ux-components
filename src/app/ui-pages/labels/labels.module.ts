import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxCardsModule,
  NtxLabelsModule
} from '@netex/ux-components';

import { LabelsRoutingModule } from './labels-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    LabelsRoutingModule,
    NtxCardsModule,
    NtxLabelsModule
  ]
})
export class LabelsModule { }
