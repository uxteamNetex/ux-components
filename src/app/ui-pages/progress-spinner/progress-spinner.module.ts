import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NtxProgressSpinnerModule,
  NtxCardsModule
} from '@netex/ux-components';

import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [DocumentationComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ProgressSpinnerRoutingModule,
    NtxProgressSpinnerModule,
    NtxCardsModule
  ]
})
export class ProgressSpinnerModule { }
